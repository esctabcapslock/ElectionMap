const http = require('http')
const fs = require('fs')
const Cheerio = require('cheerio');
const { rejects } = require('assert');
const User_Agent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:97.0) Gecko/20100101 Firefox/97.0'

function parsepost(obj){
    out = []
    for(let i in obj){
        out.push(i+'='+encodeURI(obj[i])) //이부분을 '=' 다음에 안 더해서 한참 오류남
    }
    return out.join('&')
}

// c={}
// for(let i of b.split('&').map(v=>v.split('='))) {c[i[0]] = i[1]}

function get(cityCode, townCode){
    return new Promise(async (resolve,rejects)=>{
        
        // 시-도 요청용
        // const postdata = {
        //     "electionId":"0020220309",
        //     "requestURI":"/WEB-INF/jsp/electioninfo/0020220309/vc/vccp09.jsp",
        //     "topMenuId":"VC","secondMenuId":"VCCP09",
        //     "menuId":"VCCP09",
        //     "statementId":"VCCP09_#1",
        //     "electionCode":"1",
        //     "cityCode":"1100",
        //     "sggCityCode":"0",
        //     "townCode":"-1",
        //     "x":"58",
        //     "y":"37"
        // }
        const postdata = {
            "electionId":"0020220309",
            "requestURI":"/WEB-INF/jsp/electioninfo/0020220309/vc/vccp08.jsp",
            "topMenuId":"VC","secondMenuId":"VCCP08",
            "menuId":"VCCP08","statementId":"VCCP08_#1",
            "electionCode":"1",
            "cityCode":cityCode,
            "sggCityCode":"-1",
            "townCodeFromSgg":"-1",
            "townCode":townCode,
            "sggTownCode":"-1",
            "checkCityCode":"-1",
            "x":"68",
            "y":"10"}
            
            try{
                const html = await post('http://info.nec.go.kr/electioninfo/electionInfo_report.xhtml',postdata)
                const $ = Cheerio.load(html);
                const table = {
                    cityCode,
                    townCode,
                    data:[],
                }
                let i = 0
                for(let ele of $('table tbody tr')){
                    const out = []
                    for (let v of $(ele).find('td')){
                        // if(idx==0) console.log($(v).text())
                        out.push($(v).text().trim().replace(/,/gi,'').replace(/\t/gi,''))
                    }
                    table.data.push(out)
                    // // if(idx==0) console.log(out)
                    // return out//1//typeof $(ele).text()
                    // if(i==0){
                    //     table.범례 = out
                    // }else if(i==1){
                    //     table.전국 = out//table.전국.concat(out)
                    // }else if(i%2){
                    //     table.시군구.push(out)
                    // }else{
                    //     // table.시군구[table.시군구.length-1] = table.시군구[table.시군구.length-1].concat(out)
                    // }
                    // table.push(out)
                    i++;
                }
                // console.log('trs',table)
                // fs.writeFileSync('1.csv',Buffer.from([0XEF,0XBB,0XBF])+table.data.map(v=>v.map(vv=>vv.replace(/,/gi,''))).join('\n'))
                resolve(table.data)
            }catch(err){
                console.log('오류남,',err)
                rejects('POST오류'+err)

            }
        
    })
}

function post(url,postdata, callback){
    return new Promise((resolve,rejects)=>{
    const options = {
        headers: {
            // 'User-Agent': User_Agent,
            "Content-Type": "application/x-www-form-urlencoded",
            // 'Content-Length': Buffer.byteLength(parsepost(postdata))
        },
        method:'POST',
    }
    const req = http.request(url,options,res=>{
    data = ''
    console.log(`STATUS: ${res.statusCode}`);
    res.setEncoding('utf8');
    // console.log('dsf', res.rawHeaders)
    res.on('data', (chunk) => {
        //chunk는 문자열임
        // console.log(`BODY: ${chunk.length}`);
        data+=chunk
        out.push(chunk)
    });

    res.on('end', () => {
        console.log('No more data in response.');
        resolve(data)
    });

    res.on('error',(err)=>{
        console.log('err]',err)
        rejects('err')

    })
    })
    req.write(parsepost(postdata))
    req.end()

})
// req.write(JSON.stringify(postdata))

}

// get(1100, 1101);

// electionId%3D%26requestURI%3D%26topMenuId%3D%26secondMenuId%3D%26menuId%3D%26statementId%3D%26electionCode%3D%26cityCode%3D%26sggCityCode%3D%26townCode%3D%26x%3D%26y%3D
// electionId=0020220309&requestURI=/WEB-INF/jsp/electioninfo/0020220309/vc/vccp09.jsp&topMenuId=VC&secondMenuId=VCCP09&menuId=VCCP09&statementId=VCCP09_#1&electionCode=1&cityCode=1100&sggCityCode=0&townCode=-1&x=58&y=37

const SD = [{"CODE":1100,"NAME":"서울특별시"},{"CODE":2600,"NAME":"부산광역시"},{"CODE":2700,"NAME":"대구광역시"},{"CODE":2800,"NAME":"인천광역시"},{"CODE":2900,"NAME":"광주광역시"},{"CODE":3000,"NAME":"대전광역시"},{"CODE":3100,"NAME":"울산광역시"},{"CODE":5100,"NAME":"세종특별자치시"},{"CODE":4100,"NAME":"경기도"},{"CODE":4200,"NAME":"강원도"},{"CODE":4300,"NAME":"충청북도"},{"CODE":4400,"NAME":"충청남도"},{"CODE":4500,"NAME":"전라북도"},{"CODE":4600,"NAME":"전라남도"},{"CODE":4700,"NAME":"경상북도"},{"CODE":4800,"NAME":"경상남도"},{"CODE":4900,"NAME":"제주특별자치도"}]
// const SD = [{"CODE":3000,"NAME":"대전광역시"}]
const SGG={
    서울특별시:[{"CODE":"1101","NAME":"종로구"},{"CODE":"1102","NAME":"중구"},{"CODE":"1103","NAME":"용산구"},{"CODE":"1104","NAME":"성동구"},{"CODE":"1105","NAME":"광진구"},{"CODE":"1106","NAME":"동대문구"},{"CODE":"1107","NAME":"중랑구"},{"CODE":"1108","NAME":"성북구"},{"CODE":"1109","NAME":"강북구"},{"CODE":"1110","NAME":"도봉구"},{"CODE":"1111","NAME":"노원구"},{"CODE":"1112","NAME":"은평구"},{"CODE":"1113","NAME":"서대문구"},{"CODE":"1114","NAME":"마포구"},{"CODE":"1115","NAME":"양천구"},{"CODE":"1116","NAME":"강서구"},{"CODE":"1117","NAME":"구로구"},{"CODE":"1118","NAME":"금천구"},{"CODE":"1119","NAME":"영등포구"},{"CODE":"1120","NAME":"동작구"},{"CODE":"1121","NAME":"관악구"},{"CODE":"1122","NAME":"서초구"},{"CODE":"1123","NAME":"강남구"},{"CODE":"1124","NAME":"송파구"},{"CODE":"1125","NAME":"강동구"}]
}

async function getdata() {
    fs.writeFileSync('data.csv', Buffer.from([0XEF, 0XBB, 0XBF]))
    for (let p of SD) {
        const { CODE, NAME } = p;
        console.log(CODE, NAME)
        try {
            const data = await post('http://info.nec.go.kr/bizcommon/selectbox/selectbox_townCodeJson.json',
            {
                electionId: '0020220309',
                cityCode: CODE,
            })
            const EMDlist = JSON.parse(data).jsonResult.body
            console.log(CODE, NAME, EMDlist)
            const out = []
            for (let EMD of EMDlist) {
                let d = await get(CODE, EMD.CODE)
                console.log('d', CODE, EMD, d[0])
                for (let vv of d.map(v => [CODE, NAME, EMD.CODE, EMD.NAME, ...v])) {
                    out.push(vv)
                }
            }
            // fs.writeFileSync(CODE + '.csv', Buffer.from([0XEF, 0XBB, 0XBF]) + out.join('\n'))
            fs.appendFileSync('data.csv', out.join('\n'))
    } catch (err) {
            console.log(err)
        }
    }
}
getdata()