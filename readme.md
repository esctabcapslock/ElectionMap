# 읍면동별 대한민국 20대 대선 지도 그리기

- 사전투표, 부재자투표는 위 통계에서 읍면동 정보가 나타나 있지 않아 제외함

1. [선관위 통계](http://info.nec.go.kr/main/showDocument.xhtml?electionId=0020220309&topMenuId=VC&secondMenuId=VCCP08) 이용함
1. [app.js](./app.js)를 통해 크롤링
2. [data.csv](./sheet/data.csv)에 저장
3. [join_선거DATA_동별가공.csv](./sheet/join_선거DATA_동별가공.csv)으로 가공
4. QGIS로 지도 그렸음
    - 귀찮아서 독도 자름
    - 둔촌1동, 광명1동, 일부 휴전선 인근 지역은 투표소가 없어 생략됨

## 참고 링크
- [지역 SHP 파일 (2021.06.30 기준)](http://data.nsdi.go.kr/dataset/20171206ds00001)
    - 위 파일을 바탕으로 행정구역 변경 사항을 수정하였음.
    - [다음 폴더](./shp/)에 `electionmap.7z`로 압축해 업로드해 놓았음
- [행정구역코드](https://mois.go.kr/frt/bbs/type001/commonSelectBoardArticle.do?bbsId=BBSMSTR_000000000052&nttId=89611)
- [코드들에 대하여](https://blog.naver.com/PostView.nhn?blogId=leonheart85&logNo=221085795006)
- [재미있는 읽을거리](https://www.vw-lab.com/40)

# 지역 순위

## 더불어민주당 상위 10
| 시도     | 시군구 | 읍면동 | 이재명   | 윤석열   | 심상정   | 오준호   | 허경영   |
|----------|--------|--------|----------|----------|----------|----------|----------|
| 전라남도 | 영광군 | 낙월면 | 93.39207 | 4.405286 | 0.440529 | 0        | 0        |
| 전라남도 | 여수시 | 묘도동 | 93.31551 | 4.545455 | 0.668449 | 0.26738  | 0.40107  |
| 전라남도 | 완도군 | 금일읍 | 93.11431 | 5.535554 | 0.49505  | 0        | 0.270027 |
| 전라남도 | 장흥군 | 관산읍 | 91.89189 | 6.709062 | 0.508744 | 0.031797 | 0.127186 |
| 전라남도 | 함평군 | 월야면 | 91.79207 | 6.383949 | 0.592795 | 0        | 0.547196 |
| 전라남도 | 완도군 | 금당면 | 91.78744 | 6.602254 | 0.644122 | 0        | 0.483092 |
| 전라남도 | 나주시 | 동강면 | 91.76245 | 6.449553 | 0.446999 | 0        | 0.383142 |
| 전라남도 | 완도군 | 소안면 | 91.68317 | 5.874587 | 0.924092 | 0        | 0.462046 |
| 전라남도 | 화순군 | 이양면 | 91.46959 | 6.25     | 0.675676 | 0.084459 | 0.422297 |
| 전라남도 | 나주시 | 세지면 | 91.46682 | 7.138873 | 0.836587 | 0.111545 | 0.055772 |


## 국민의힘 상위 10

| 시도     | 시군구     | 읍면동 | 이재명   | 윤석열   | 심상정   | 오준호   | 허경영   |
|----------|------------|--------|----------|----------|----------|----------|----------|
| 경상북도 | 상주시     | 중동면 | 9.613375 | 87.56531 | 0.731452 | 0        | 1.044932 |
| 경상북도 | 군위군     | 우보면 | 10.98398 | 86.72769 | 0.762777 | 0        | 0.762777 |
| 경상북도 | 영덕군     | 병곡면 | 11.27733 | 86.24856 | 1.035673 | 0.057537 | 0.517837 |
| 경상북도 | 포항시북구 | 죽장면 | 11.50773 | 86.14811 | 0.958977 | 0.106553 | 0.532765 |
| 경상북도 | 고령군     | 개진면 | 11.44781 | 86.02694 | 0.925926 | 0        | 0.673401 |
| 경상북도 | 의성군     | 단북면 | 10.94127 | 86.00161 | 0.965406 | 0.080451 | 0.884956 |
| 경상북도 | 군위군     | 의흥면 | 11.70732 | 85.85366 | 0.914634 | 0        | 0.487805 |
| 경상북도 | 영덕군     | 축산면 | 12.78066 | 85.43466 | 0.748417 | 0.115141 | 0.402994 |
| 경상북도 | 구미시     | 옥성면 | 12.07483 | 85.37415 | 0.935374 | 0.085034 | 0.42517  |
| 경상북도 | 군위군     | 효령면 | 12.39121 | 85.37091 | 0.994613 | 0.124327 | 0.621633 |


## 정의당 상위 10

| 시도       | 시군구   | 읍면동  | 이재명   | 윤석열   | 심상정   | 오준호   | 허경영   |
|------------|----------|---------|----------|----------|----------|----------|----------|
| 서울특별시 | 마포구   | 합정동  | 48.36775 | 46.1026  | 4.65523  | 0.058294 | 0.507995 |
| 경기도     | 덕양구   | 흥도동  | 53.85706 | 40.85197 | 4.562738 | 0.038667 | 0.515564 |
| 경기도     | 덕양구   | 흥도동  | 53.85706 | 40.85197 | 4.562738 | 0.038667 | 0.515564 |
| 서울특별시 | 마포구   | 연남동  | 48.50287 | 45.84701 | 4.532404 | 0.153815 | 0.66653  |
| 서울특별시 | 마포구   | 성산1동 | 52.02239 | 42.46118 | 4.532322 | 0.081257 | 0.586854 |
| 서울특별시 | 마포구   | 서교동  | 47.17828 | 47.4358  | 4.517696 | 0.132441 | 0.485615 |
| 서울특별시 | 서대문구 | 신촌동  | 43.05237 | 51.6409  | 4.488778 | 0.129676 | 0.438903 |
| 서울특별시 | 성북구   | 동선동  | 50.54016 | 44.03476 | 4.462189 | 0.093941 | 0.634101 |
| 울산광역시 | 북구     | 양정동  | 48.96443 | 44.64822 | 4.426877 | 0.01581  | 1.233202 |
| 서울특별시 | 성북구   | 안암동  | 44.02655 | 50.59385 | 4.40149  | 0.128086 | 0.489054 |

## 기본소득당 상위 10
| 시도       | 시군구 | 읍면동   | 이재명   | 윤석열   | 심상정   | 오준호   | 허경영   |
|------------|--------|----------|----------|----------|----------|----------|----------|
| 전라남도   | 장흥군 | 유치면   | 82.08469 | 11.88925 | 2.28013  | 0.488599 | 1.302932 |
| 전라북도   | 남원시 | 대강면   | 84.61538 | 12.01923 | 1.057692 | 0.480769 | 0.769231 |
| 전라북도   | 남원시 | 대산면   | 83.88889 | 11.38889 | 2.037037 | 0.462963 | 0.648148 |
| 전라남도   | 보성군 | 노동면   | 85.22238 | 10.7604  | 1.43472  | 0.430416 | 0.573888 |
| 경상북도   | 김천시 | 증산면   | 16.28895 | 78.32861 | 2.124646 | 0.424929 | 1.84136  |
| 경상남도   | 산청군 | 생비량면 | 20.96128 | 74.0988  | 2.670227 | 0.400534 | 0.400534 |
| 경상북도   | 김천시 | 부항면   | 14.99365 | 81.9568  | 1.016518 | 0.381194 | 0.635324 |
| 전라남도   | 나주시 | 다도면   | 87.55718 | 9.240622 | 0.914913 | 0.365965 | 0.182983 |
| 대구광역시 | 달성군 | 구지면   | 26.27169 | 69.67666 | 2.129338 | 0.364748 | 1.222397 |
| 경상북도   | 울진군 | 금강송면 | 17.71845 | 75.72816 | 1.456311 | 0.364078 | 2.063107 |

## 국가혁명당 상위 10

| 시도       | 시군구 | 읍면동 | 이재명   | 윤석열   | 심상정   | 오준호   | 허경영   |
|------------|--------|--------|----------|----------|----------|----------|----------|
| 인천광역시 | 옹진군 | 연평면 | 34.08203 | 57.32422 | 2.929688 | 0.195313 | 4.492188 |
| 인천광역시 | 옹진군 | 대청면 | 26.01626 | 67.59582 | 2.32288  | 0.232288 | 3.252033 |
| 경상남도   | 진주시 | 지수면 | 31.25    | 60.2459  | 2.868852 | 0.102459 | 3.17623  |
| 경상남도   | 하동군 | 청암면 | 32.12996 | 62.57521 | 0.722022 | 0        | 2.527076 |
| 경상북도   | 상주시 | 화북면 | 23.27747 | 71.32216 | 1.675978 | 0.09311  | 2.513966 |
| 강원도     | 화천군 | 상서면 | 36.38838 | 57.66788 | 2.949183 | 0.090744 | 2.450091 |
| 경상남도   | 거제시 | 연초면 | 38.23278 | 55.9478  | 2.781344 | 0.021395 | 2.37484  |
| 인천광역시 | 옹진군 | 백령면 | 34.54545 | 60.54545 | 2.290909 | 0        | 2.327273 |
| 경상북도   | 구미시 | 진미동 | 30.56263 | 64.45937 | 2.269044 | 0.069461 | 2.326928 |
| 강원도     | 인제군 | 서화면 | 37.706   | 56.42716 | 2.702703 | 0.263678 | 2.241266 |

# 3위지도

![](./output/3위.png)

# 양당 후보 지도

1위후보 득표율 + 2위후보 득표율 = 100으로 두고 비율을 계산해 그림
![](./output/양당.png)

# 면적당 득표수 차이 지도
![](./output/면적당득표수차.png)

# 득표율 표준편차 지도

각 후보별 득표율 (단위: %)들의 표준편차를 그림

![](./output/std.png)

# 후보별 득표율

## 3 정의당 심상정
![](./output/3.png)
## 5 기본소득당 오준호
![](./output/5.png)
## 6 국가혁명당 허경영
![](./output/6.png)
## 7 노동당 이백윤
![](./output/7.png)
## 8 새누리당 옥은호
![](./output/8.png)
## 10 신자유연합 김경재
![](./output/10.png)
## 11 우리공화당 조원진
![](./output/11.png)
## 12 진보당 김재연
![](./output/12.png)
## 13 통일한국당 이경희
![](./output/13.png)
## 14 한류연합당 김민찬
![](./output/14.png)

# 기타 통계

## 본투표 참여율(?)
$\text{참여율(?)} = \frac{\text{투표수}}{\text{선거인수}}$
![](./output/본투표_참여율.png)
## 무효표 비율
> 무효표: 선거에 참여하였으나, 득표로 인정되지 않은 표

> 기권표: 선거권은 있으나 투표장에 가지 않음

$\text{무효표 비율} = \frac{\text{무효 투표수}}{\text{투표수}}$

![](./output/무효표_비율.png)
