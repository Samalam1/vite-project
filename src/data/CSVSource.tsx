import { imageList } from "./ImageList"

const csvSource = `
ID,Character Name,Character Class,Cost,Switch,Health,Melee,Energy,Armor,Rush,Smash,Throw,Pursuit,Revenge,Stagger,Super,Ultimate,Short Dash Cost,Ki Blast,Ki Blast Cost,Ki Blast Limit,Starting Ki,Ki Charge,Sparking Charge,Sparking Duration,Attack Ki Gain,Ki Regen,Ki Regen Range,Skill Start,Skill Limit,Skill Regen,Skill Dmg,Miscellaneous
1,Goku (Z - Early),Normal,4 DP,19 s,4.0 Bars,0.00%,0.00%,0.00%,390,675,"1,250","1,250","1,250",5 Hit(s),0.00%,0.00%,0.265 Bars,312,0.20 Bars (+50% charged),5 Ki Blasts,2 Bar(s),1.40 Bars/s,0.00%,0.00%,0.0300 Bars per hit,0.18 Bars/s,Between 0 - 2 Bars,0 Point(s),6 Point(s),4.20 Points/m,0.00%,
2,Goku (Z - Mid),Normal,5 DP,23 s,4.0 Bars,0.00%,0.00%,0.00%,409,708,"1,312","1,312","1,312",4 Hit(s),+5.00%,+5.00%,0.265 Bars,328,0.20 Bars (+50% charged),6 Ki Blasts,2 Bar(s),1.40 Bars/s,0.00%,0.00%,0.0300 Bars per hit,0.18 Bars/s,Between 0 - 2 Bars,0 Point(s),6 Point(s),4.20 Points/m,+5.00%,
3,"Goku (Z - Mid), Super Saiyan",Super Saiyan,6 DP,27 s,4.0 Bars,0.00%,0.00%,0.00%,475,823,"1,500","1,500","1,500",3 Hit(s),+20.00%,+20.00%,0.265 Bars,380,0.20 Bars (+50% charged),7 Ki Blasts,3 Bar(s),1.76 Bars/s,0.00%,-2.80%,0.0270 Bars per hit,0.14 Bars/s,Between 0 - 2 Bars,0 Point(s),6 Point(s),4.20 Points/m,+20.00%,
4,Goku (Z - End),Normal,5 DP,23 s,4.0 Bars,0.00%,0.00%,0.00%,409,708,"1,312","1,312","1,312",4 Hit(s),+5.00%,+5.00%,0.265 Bars,328,0.20 Bars (+50% charged),6 Ki Blasts,2 Bar(s),1.40 Bars/s,0.00%,0.00%,0.0300 Bars per hit,0.18 Bars/s,Between 0 - 2 Bars,0 Point(s),6 Point(s),4.20 Points/m,+5.00%,
5,"Goku (Z - End), Super Saiyan",Super Saiyan,6 DP,27 s,4.0 Bars,0.00%,0.00%,0.00%,475,823,"1,500","1,500","1,500",3 Hit(s),+20.00%,+20.00%,0.265 Bars,380,0.20 Bars (+50% charged),7 Ki Blasts,2 Bar(s),1.76 Bars/s,0.00%,-2.80%,0.0270 Bars per hit,0.14 Bars/s,Between 0 - 2 Bars,0 Point(s),6 Point(s),4.20 Points/m,+20.00%,
6,"Goku (Z - End), Super Saiyan 2",Super Saiyan,6 DP,27 s,4.0 Bars,0.00%,0.00%,0.00%,475,823,"1,500","1,500","1,500",3 Hit(s),+20.00%,+20.00%,0.265 Bars,380,0.20 Bars (+50% charged),8 Ki Blasts,2 Bar(s),1.76 Bars/s,0.00%,-2.80%,0.0270 Bars per hit,0.14 Bars/s,Between 0 - 2 Bars,0 Point(s),6 Point(s),4.20 Points/m,+20.00%,
7,"Goku (Z - End), Super Saiyan 3",Super Saiyan,7 DP,31 s,4.0 Bars,0.00%,0.00%,0.00%,495,857,"1,562","1,562","1,562",1 Hit(s),+25.00%,+25.00%,0.265 Bars,396,0.20 Bars (+50% charged),9 Ki Blasts,1 Bar(s),1.76 Bars/s,0.00%,-2.80%,0.0270 Bars per hit,0.14 Bars/s,Between 0 - 2 Bars,0 Point(s),5 Point(s),4.20 Points/m,+25.00%,"Super Movement, High-Speed Movement"
8,Goku (Super),Normal,5 DP,23 s,4.0 Bars,0.00%,0.00%,0.00%,409,708,"1,312","1,312","1,312",4 Hit(s),+5.00%,+5.00%,0.265 Bars,328,0.20 Bars (+50% charged),6 Ki Blasts,2 Bar(s),1.40 Bars/s,0.00%,0.00%,0.0300 Bars per hit,0.18 Bars/s,Between 0 - 2 Bars,0 Point(s),6 Point(s),4.20 Points/m,+5.00%,
9,"Goku (Super), Super Saiyan",Super Saiyan,6 DP,27 s,4.0 Bars,0.00%,0.00%,0.00%,475,823,"1,500","1,500","1,500",3 Hit(s),+20.00%,+20.00%,0.265 Bars,380,0.20 Bars (+50% charged),7 Ki Blasts,2 Bar(s),1.76 Bars/s,0.00%,-2.80%,0.0270 Bars per hit,0.14 Bars/s,Between 0 - 2 Bars,0 Point(s),6 Point(s),4.20 Points/m,+20.00%,
10,"Goku (Super), Super Saiyan God",Super Saiyan,7 DP,31 s,4.0 Bars,+2.00%,+2.00%,0.00%,495,857,"1,562","1,562","1,562",1 Hit(s),+25.00%,+25.00%,0.265 Bars,396,0.20 Bars (+50% charged),8 Ki Blasts,2 Bar(s),1.76 Bars/s,0.00%,-2.80%,0.0270 Bars per hit,0.14 Bars/s,Between 0 - 2 Bars,0 Point(s),6 Point(s),4.20 Points/m,+25.00%,"Super Movement, High-Speed Movement"
11,"Goku (Super), Super Saiyan God Super Saiyan",Super Saiyan,8 DP,35 s,4.0 Bars,+2.00%,+2.00%,0.00%,514,891,"1,625","1,625","1,625",1 Hit(s),+30.00%,+30.00%,0.265 Bars,411,0.20 Bars (+50% charged),10 Ki Blasts,2 Bar(s),1.76 Bars/s,0.00%,-2.80%,0.0270 Bars per hit,0.14 Bars/s,Between 0 - 2 Bars,0 Point(s),6 Point(s),4.20 Points/m,+30.00%,High-Speed Movement
12,"Goku (Super), Ultra Instinct -Sign-",Secret,8 DP,35 s,4.0 Bars,+3.00%,+3.00%,0.00%,526,911,"1,688","1,688","1,688",1 Hit(s),+35.00%,+35.00%,0.265 Bars,374,0.20 Bars (+50% charged),15 Ki Blasts,1 Bar(s),1.54 Bars/s,+20.00%,-1.40%,0.0300 Bars per hit,0.16 Bars/s,Between 0 - 2 Bars,0 Point(s),6 Point(s),3.99 Points/m,+20.00%,"Super Aura, Auto Dodge, Super Movement, High-Speed Movement"
13,"Goku (Super), Ultra Instinct",Secret,9 DP,39 s,5.0 Bars,+3.00%,+3.00%,0.00%,546,944,"1,750","1,750","1,750",1 Hit(s),+40.00%,+40.00%,0.265 Bars,390,0.20 Bars (+50% charged),18 Ki Blasts,1 Bar(s),1.32 Bars/s,+20.00%,-1.40%,0.0300 Bars per hit,0.18 Bars/s,Between 0 - 2 Bars,0 Point(s),6 Point(s),3.99 Points/m,+25.00%,"Super Aura, Auto Dodge, Super Movement, High-Speed Movement"
14,Goku (GT),Normal,5 DP,23 s,4.0 Bars,-10.00%,-10.00%,0.00%,409,708,"1,312","1,312","1,312",4 Hit(s),+5.00%,+5.00%,0.265 Bars,328,0.20 Bars (+50% charged),6 Ki Blasts,2 Bar(s),1.40 Bars/s,0.00%,0.00%,0.0300 Bars per hit,0.18 Bars/s,Between 0 - 2 Bars,0 Point(s),6 Point(s),4.20 Points/m,+5.00%,
15,"Goku (GT), Super Saiyan",Super Saiyan,6 DP,27 s,4.0 Bars,-10.00%,-10.00%,0.00%,475,823,"1,500","1,500","1,500",3 Hit(s),+20.00%,+20.00%,0.265 Bars,380,0.20 Bars (+50% charged),7 Ki Blasts,2 Bar(s),1.76 Bars/s,0.00%,-2.80%,0.0270 Bars per hit,0.14 Bars/s,Between 0 - 2 Bars,0 Point(s),6 Point(s),4.20 Points/m,+20.00%,
16,"Goku (GT), Super Saiyan 3",Super Saiyan,7 DP,31 s,4.0 Bars,-10.00%,-10.00%,0.00%,495,857,"1,562","1,562","1,562",1 Hit(s),+25.00%,+25.00%,0.265 Bars,396,0.20 Bars (+50% charged),8 Ki Blasts,1 Bar(s),1.76 Bars/s,0.00%,-2.80%,0.0270 Bars per hit,0.14 Bars/s,Between 0 - 2 Bars,0 Point(s),6 Point(s),4.20 Points/m,+25.00%,
17,"Goku (GT), Super Saiyan 4",Super Saiyan,8 DP,35 s,4.0 Bars,0.00%,0.00%,0.00%,514,891,"1,625","1,625","1,625",1 Hit(s),+30.00%,+30.00%,0.265 Bars,411,0.20 Bars (+50% charged),10 Ki Blasts,1 Bar(s),1.76 Bars/s,0.00%,-2.80%,0.0270 Bars per hit,0.14 Bars/s,Between 0 - 2 Bars,0 Point(s),5 Point(s),4.20 Points/m,+30.00%,High-Speed Movement
18,Goku (Teen),Normal,3 DP,15 s,3.5 Bars,-10.00%,-10.00%,0.00%,370,641,"1,187","1,187","1,187",5 Hit(s),-5.00%,-5.00%,0.265 Bars,296,0.20 Bars (+50% charged),4 Ki Blasts,1 Bar(s),1.40 Bars/s,0.00%,0.00%,0.0300 Bars per hit,0.18 Bars/s,Between 0 - 2 Bars,2 Point(s),4 Point(s),4.20 Points/m,-5.00%,
19,Goku (Mini),Normal,4 DP,19 s,4.0 Bars,-10.00%,-10.00%,0.00%,390,675,"1,250","1,250","1,250",5 Hit(s),0.00%,0.00%,0.265 Bars,0,0.20 Bars (+50% charged),5 Ki Blasts,2 Bar(s),1.00 Bars/s,0.00%,0.00%,0.0300 Bars per hit,0.18 Bars/s,Between 0 - 2 Bars,0 Point(s),5 Point(s),4.20 Points/m,0.00%,High-Speed Movement
20,Vegeta (Z - Scouter),Ki-Blast,4 DP,19 s,4.0 Bars,-5.00%,-5.00%,0.00%,351,608,"1,125","1,125","1,125",5 Hit(s),0.00%,0.00%,0.265 Bars,359,0.16 Bars (+50% charged),999 Ki Blasts,2 Bar(s),1.54 Bars/s,-10.00%,0.00%,0.0300 Bars per hit,0.19 Bars/s,Between 0 - 2 Bars,0 Point(s),5 Point(s),4.20 Points/m,0.00%,Scouter
21,Great Ape Vegeta,Giant,5 DP,23 s,5.0 Bars,+30.00%,-10.00%,+10.00%,656,"2,396","4,437","1,500","1,312",1 Hit(s),+15.00%,+15.00%,0.515 Bars,444,0.20 Bars (+50% charged),5 Ki Blasts,2 Bar(s),1.60 Bars/s,0.00%,0.00%,0.0315 Bars per hit,0.15 Bars/s,Between 0 - 2 Bars,0 Point(s),4 Point(s),4.20 Points/m,+5.00%,Super Armor
22,Vegeta (Z - Early),Ki-Blast,5 DP,23 s,4.0 Bars,-5.00%,-5.00%,0.00%,370,641,"1,187","1,187","1,187",4 Hit(s),+5.00%,+5.00%,0.265 Bars,375,0.16 Bars (+50% charged),999 Ki Blasts,2 Bar(s),1.54 Bars/s,-10.00%,0.00%,0.0300 Bars per hit,0.19 Bars/s,Between 0 - 2 Bars,0 Point(s),4 Point(s),4.20 Points/m,+5.00%,
23,"Vegeta (Z - Early), Super Saiyan",Super Saiyan,6 DP,27 s,4.0 Bars,0.00%,0.00%,0.00%,475,823,"1,500","1,500","1,500",3 Hit(s),+20.00%,+20.00%,0.265 Bars,380,0.20 Bars (+50% charged),999 Ki Blasts,2 Bar(s),1.76 Bars/s,0.00%,-2.80%,0.0270 Bars per hit,0.14 Bars/s,Between 0 - 2 Bars,0 Point(s),4 Point(s),4.20 Points/m,+20.00%,
24,Super Vegeta,Super Saiyan,6 DP,27 s,4.0 Bars,+3.00%,+3.00%,0.00%,475,823,"1,500","1,500","1,500",3 Hit(s),+20.00%,+20.00%,0.385 Bars,380,0.20 Bars (+50% charged),999 Ki Blasts,3 Bar(s),1.76 Bars/s,0.00%,-2.80%,0.0270 Bars per hit,0.14 Bars/s,Between 0 - 2 Bars,0 Point(s),5 Point(s),4.20 Points/m,+20.00%,
25,Vegeta (Z - End),Ki-Blast,5 DP,23 s,4.0 Bars,-5.00%,-5.00%,0.00%,370,641,"1,187","1,187","1,187",4 Hit(s),+5.00%,+5.00%,0.265 Bars,375,0.16 Bars (+50% charged),999 Ki Blasts,2 Bar(s),1.54 Bars/s,-10.00%,0.00%,0.0300 Bars per hit,0.19 Bars/s,Between 0 - 2 Bars,0 Point(s),5 Point(s),4.20 Points/m,+5.00%,
26,"Vegeta (Z - End), Super Saiyan",Super Saiyan,6 DP,27 s,4.0 Bars,0.00%,0.00%,0.00%,475,823,"1,500","1,500","1,500",3 Hit(s),+20.00%,+20.00%,0.265 Bars,380,0.20 Bars (+50% charged),999 Ki Blasts,2 Bar(s),1.76 Bars/s,0.00%,-2.80%,0.0270 Bars per hit,0.14 Bars/s,Between 0 - 2 Bars,0 Point(s),5 Point(s),4.20 Points/m,+20.00%,
27,"Vegeta (Z - End), Super Saiyan 2",Super Saiyan,6 DP,27 s,4.0 Bars,0.00%,0.00%,0.00%,475,823,"1,500","1,500","1,500",3 Hit(s),+20.00%,+20.00%,0.265 Bars,380,0.20 Bars (+50% charged),999 Ki Blasts,2 Bar(s),1.76 Bars/s,0.00%,-2.80%,0.0270 Bars per hit,0.14 Bars/s,Between 0 - 2 Bars,0 Point(s),5 Point(s),4.20 Points/m,+20.00%,
28,Majin Vegeta,Almighty,7 DP,31 s,4.0 Bars,0.00%,0.00%,+25.00%,487,844,"1,562","1,562","1,562",1 Hit(s),+25.00%,+25.00%,0.265 Bars,390,0.20 Bars (+50% charged),999 Ki Blasts,5 Bar(s),1.44 Bars/s,+10.00%,0.00%,0.0300 Bars per hit,0.15 Bars/s,Between 0 - 2 Bars,0 Point(s),6 Point(s),4.20 Points/m,+25.00%,Sparking Super Armor
29,Vegeta (Super),Ki-Blast,5 DP,23 s,4.0 Bars,-5.00%,-5.00%,0.00%,370,641,"1,187","1,187","1,187",4 Hit(s),+5.00%,+5.00%,0.265 Bars,375,0.16 Bars (+50% charged),999 Ki Blasts,2 Bar(s),1.54 Bars/s,-10.00%,0.00%,0.0300 Bars per hit,0.19 Bars/s,Between 0 - 2 Bars,0 Point(s),5 Point(s),4.20 Points/m,+5.00%,
30,"Vegeta (Super), Super Saiyan",Super Saiyan,6 DP,27 s,4.0 Bars,0.00%,0.00%,0.00%,475,823,"1,500","1,500","1,500",3 Hit(s),+20.00%,+20.00%,0.265 Bars,380,0.20 Bars (+50% charged),999 Ki Blasts,2 Bar(s),1.76 Bars/s,0.00%,-2.80%,0.0270 Bars per hit,0.14 Bars/s,Between 0 - 2 Bars,0 Point(s),5 Point(s),4.20 Points/m,+20.00%,
31,"Vegeta (Super), Super Saiyan God",Super Saiyan,7 DP,31 s,4.0 Bars,+2.00%,+2.00%,0.00%,495,857,"1,562","1,562","1,562",1 Hit(s),+25.00%,+25.00%,0.265 Bars,396,0.20 Bars (+50% charged),999 Ki Blasts,2 Bar(s),1.76 Bars/s,0.00%,-2.80%,0.0270 Bars per hit,0.14 Bars/s,Between 0 - 2 Bars,0 Point(s),5 Point(s),4.20 Points/m,+25.00%,High-Speed Movement
32,"Vegeta (Super), Super Saiyan God Super Saiyan",Super Saiyan,8 DP,35 s,4.0 Bars,+2.00%,+2.00%,0.00%,514,891,"1,625","1,625","1,625",1 Hit(s),+30.00%,+30.00%,0.265 Bars,411,0.20 Bars (+50% charged),999 Ki Blasts,2 Bar(s),1.76 Bars/s,0.00%,-2.80%,0.0270 Bars per hit,0.14 Bars/s,Between 0 - 2 Bars,0 Point(s),5 Point(s),4.20 Points/m,+30.00%,"Super Movement, High-Speed Movement"
33,"Vegeta (GT), Super Saiyan 4",Super Saiyan,8 DP,35 s,4.0 Bars,0.00%,0.00%,0.00%,514,891,"1,625","1,625","1,625",1 Hit(s),+30.00%,+30.00%,0.265 Bars,411,0.20 Bars (+50% charged),999 Ki Blasts,2 Bar(s),1.76 Bars/s,0.00%,-2.80%,0.0270 Bars per hit,0.14 Bars/s,Between 0 - 2 Bars,0 Point(s),6 Point(s),4.20 Points/m,+30.00%,"Super Movement, High-Speed Movement"
34,Gohan (Kid),Normal,3 DP,15 s,3.0 Bars,-10.00%,-10.00%,0.00%,370,641,"1,187","1,187","1,187",5 Hit(s),-5.00%,-5.00%,0.265 Bars,296,0.20 Bars (+50% charged),5 Ki Blasts,1 Bar(s),1.40 Bars/s,0.00%,0.00%,0.0300 Bars per hit,0.18 Bars/s,Between 0 - 2 Bars,1 Point(s),4 Point(s),4.20 Points/m,-5.00%,
35,Gohan (Teen),Normal,4 DP,19 s,4.0 Bars,-10.00%,-10.00%,0.00%,390,675,"1,250","1,250","1,250",5 Hit(s),0.00%,0.00%,0.265 Bars,312,0.20 Bars (+50% charged),6 Ki Blasts,2 Bar(s),1.40 Bars/s,0.00%,0.00%,0.0300 Bars per hit,0.18 Bars/s,Between 0 - 2 Bars,0 Point(s),5 Point(s),4.20 Points/m,0.00%,
36,"Gohan (Teen), Super Saiyan",Super Saiyan,6 DP,27 s,4.0 Bars,-10.00%,-10.00%,0.00%,475,823,"1,500","1,500","1,500",3 Hit(s),+20.00%,+20.00%,0.265 Bars,380,0.20 Bars (+50% charged),7 Ki Blasts,2 Bar(s),1.76 Bars/s,0.00%,-2.80%,0.0270 Bars per hit,0.14 Bars/s,Between 0 - 2 Bars,0 Point(s),5 Point(s),4.20 Points/m,+20.00%,
37,"Gohan (Teen), Super Saiyan 2",Super Saiyan,7 DP,31 s,4.0 Bars,-10.00%,-10.00%,0.00%,495,857,"1,562","1,562","1,562",1 Hit(s),+25.00%,+25.00%,0.265 Bars,396,0.20 Bars (+50% charged),8 Ki Blasts,2 Bar(s),1.76 Bars/s,0.00%,-2.80%,0.0270 Bars per hit,0.14 Bars/s,Between 0 - 2 Bars,0 Point(s),5 Point(s),4.20 Points/m,+25.00%,High-Speed Movement
38,Gohan (Adult),Normal,4 DP,19 s,4.0 Bars,0.00%,0.00%,0.00%,390,675,"1,250","1,250","1,250",5 Hit(s),0.00%,0.00%,0.265 Bars,312,0.20 Bars (+50% charged),5 Ki Blasts,2 Bar(s),1.40 Bars/s,0.00%,0.00%,0.0300 Bars per hit,0.18 Bars/s,Between 0 - 2 Bars,0 Point(s),5 Point(s),4.20 Points/m,0.00%,"Super Movement, High-Speed Movement"
39,"Gohan (Adult), Super Saiyan",Super Saiyan,6 DP,27 s,4.0 Bars,0.00%,0.00%,0.00%,475,823,"1,500","1,500","1,500",3 Hit(s),+20.00%,+20.00%,0.265 Bars,380,0.20 Bars (+50% charged),6 Ki Blasts,2 Bar(s),1.76 Bars/s,0.00%,-2.80%,0.0270 Bars per hit,0.14 Bars/s,Between 0 - 2 Bars,0 Point(s),4 Point(s),4.20 Points/m,+20.00%,"Super Movement, High-Speed Movement"
40,"Gohan (Adult), Super Saiyan 2",Super Saiyan,7 DP,31 s,4.0 Bars,0.00%,0.00%,0.00%,495,857,"1,562","1,562","1,562",1 Hit(s),+25.00%,+25.00%,0.265 Bars,396,0.20 Bars (+50% charged),7 Ki Blasts,2 Bar(s),1.76 Bars/s,0.00%,-2.80%,0.0270 Bars per hit,0.14 Bars/s,Between 0 - 2 Bars,0 Point(s),4 Point(s),4.20 Points/m,+25.00%,"Super Movement, High-Speed Movement"
41,Great Saiyaman,Normal,4 DP,19 s,4.0 Bars,0.00%,0.00%,0.00%,390,675,"1,250","1,250","1,250",5 Hit(s),0.00%,0.00%,0.265 Bars,312,0.20 Bars (+50% charged),5 Ki Blasts,2 Bar(s),1.40 Bars/s,0.00%,0.00%,0.0300 Bars per hit,0.18 Bars/s,Between 0 - 2 Bars,0 Point(s),5 Point(s),4.20 Points/m,0.00%,"Super Movement, High-Speed Movement"
42,Ultimate Gohan,Almighty,7 DP,31 s,4.0 Bars,0.00%,0.00%,0.00%,487,844,"1,562","1,562","1,562",1 Hit(s),+25.00%,+25.00%,0.265 Bars,390,0.20 Bars (+50% charged),9 Ki Blasts,3 Bar(s),1.26 Bars/s,+10.00%,0.00%,0.0300 Bars per hit,0.18 Bars/s,Between 0 - 2 Bars,0 Point(s),5 Point(s),4.20 Points/m,+25.00%,"Super Movement, High-Speed Movement"
43,Gohan (Future),Normal,5 DP,23 s,4.0 Bars,0.00%,0.00%,0.00%,409,708,"1,312","1,312","1,312",4 Hit(s),+5.00%,+5.00%,0.265 Bars,328,0.20 Bars (+50% charged),6 Ki Blasts,2 Bar(s),1.40 Bars/s,0.00%,0.00%,0.0300 Bars per hit,0.18 Bars/s,Between 0 - 2 Bars,0 Point(s),5 Point(s),4.20 Points/m,+5.00%,
44,"Gohan (Future), Super Saiyan",Super Saiyan,6 DP,27 s,4.0 Bars,0.00%,0.00%,0.00%,475,823,"1,500","1,500","1,500",3 Hit(s),+20.00%,+20.00%,0.265 Bars,380,0.20 Bars (+50% charged),7 Ki Blasts,2 Bar(s),1.76 Bars/s,0.00%,-2.80%,0.0270 Bars per hit,0.14 Bars/s,Between 0 - 2 Bars,0 Point(s),6 Point(s),4.20 Points/m,+20.00%,
45,Piccolo,Normal,4 DP,19 s,4.0 Bars,0.00%,0.00%,0.00%,390,675,"1,250","1,250","1,250",5 Hit(s),0.00%,0.00%,0.265 Bars,312,0.20 Bars (+50% charged),6 Ki Blasts,2 Bar(s),1.40 Bars/s,0.00%,0.00%,0.0300 Bars per hit,0.18 Bars/s,Between 0 - 2 Bars,0 Point(s),5 Point(s),4.20 Points/m,0.00%,
46,Piccolo (Fused with Kami),Normal,5 DP,23 s,4.0 Bars,0.00%,0.00%,0.00%,409,708,"1,312","1,312","1,312",4 Hit(s),+5.00%,+5.00%,0.265 Bars,328,0.20 Bars (+50% charged),7 Ki Blasts,3 Bar(s),1.40 Bars/s,0.00%,0.00%,0.0300 Bars per hit,0.18 Bars/s,Between 0 - 2 Bars,0 Point(s),6 Point(s),4.20 Points/m,+5.00%,"Super Movement, High-Speed Movement"
47,Nail,Normal,4 DP,19 s,4.0 Bars,0.00%,0.00%,0.00%,390,675,"1,250","1,250","1,250",5 Hit(s),0.00%,0.00%,0.265 Bars,312,0.20 Bars (+50% charged),5 Ki Blasts,2 Bar(s),1.40 Bars/s,0.00%,0.00%,0.0300 Bars per hit,0.18 Bars/s,Between 0 - 2 Bars,0 Point(s),5 Point(s),4.20 Points/m,0.00%,
48,Krillin,Normal,3 DP,15 s,3.5 Bars,-10.00%,-10.00%,0.00%,370,641,"1,187","1,187","1,187",5 Hit(s),-5.00%,-5.00%,0.265 Bars,296,0.20 Bars (+50% charged),5 Ki Blasts,1 Bar(s),1.40 Bars/s,0.00%,0.00%,0.0300 Bars per hit,0.18 Bars/s,Between 0 - 2 Bars,0 Point(s),4 Point(s),4.20 Points/m,-5.00%,
49,Yamcha,Normal,3 DP,15 s,3.5 Bars,0.00%,0.00%,0.00%,370,641,"1,187","1,187","1,187",5 Hit(s),-5.00%,-5.00%,0.265 Bars,296,0.20 Bars (+50% charged),5 Ki Blasts,1 Bar(s),1.60 Bars/s,0.00%,0.00%,0.0300 Bars per hit,0.15 Bars/s,Between 0 - 2 Bars,0 Point(s),4 Point(s),4.20 Points/m,-5.00%,
50,Tien,Rival,4 DP,19 s,4.0 Bars,0.00%,0.00%,0.00%,429,675,"1,188","1,188","1,375",5 Hit(s),+10.00%,0.00%,0.265 Bars,343,0.20 Bars (+50% charged),5 Ki Blasts,2 Bar(s),1.54 Bars/s,0.00%,0.00%,0.0300 Bars per hit,0.18 Bars/s,Between 0 - 2 Bars,0 Point(s),4 Point(s),4.20 Points/m,+10.00%,
51,Trunks (Sword),Normal,4 DP,19 s,4.0 Bars,0.00%,0.00%,0.00%,390,675,"1,250","1,250","1,250",5 Hit(s),0.00%,0.00%,0.265 Bars,312,0.20 Bars (+50% charged),7 Ki Blasts,2 Bar(s),1.40 Bars/s,0.00%,0.00%,0.0300 Bars per hit,0.18 Bars/s,Between 0 - 2 Bars,0 Point(s),4 Point(s),4.20 Points/m,0.00%,Sword
52,"Trunks (Sword), Super Saiyan",Super Saiyan,6 DP,27 s,4.0 Bars,0.00%,0.00%,0.00%,475,823,"1,500","1,500","1,500",3 Hit(s),+20.00%,+20.00%,0.265 Bars,380,0.20 Bars (+50% charged),8 Ki Blasts,2 Bar(s),1.76 Bars/s,0.00%,-2.80%,0.0270 Bars per hit,0.14 Bars/s,Between 0 - 2 Bars,0 Point(s),4 Point(s),4.20 Points/m,+20.00%,Sword
53,Trunks (Melee),Normal,5 DP,23 s,4.0 Bars,0.00%,0.00%,0.00%,409,708,"1,312","1,312","1,312",4 Hit(s),+5.00%,+5.00%,0.265 Bars,328,0.20 Bars (+50% charged),4 Ki Blasts,2 Bar(s),1.40 Bars/s,0.00%,0.00%,0.0300 Bars per hit,0.18 Bars/s,Between 0 - 2 Bars,0 Point(s),5 Point(s),4.20 Points/m,+5.00%,
54,"Trunks (Melee), Super Saiyan",Super Saiyan,6 DP,27 s,4.0 Bars,+6.00%,+6.00%,0.00%,475,823,"1,500","1,500","1,500",3 Hit(s),+20.00%,+20.00%,0.265 Bars,380,0.20 Bars (+50% charged),4 Ki Blasts,2 Bar(s),1.76 Bars/s,0.00%,-2.80%,0.0270 Bars per hit,0.14 Bars/s,Between 0 - 2 Bars,0 Point(s),5 Point(s),4.20 Points/m,+20.00%,
55,Super Trunks,Power,6 DP,27 s,4.0 Bars,+5.00%,+5.00%,0.00%,487,843,"1,563","1,563","1,563",3 Hit(s),+5.00%,+5.00%,0.385 Bars,296,0.22 Bars (+50% charged),4 Ki Blasts,3 Bar(s),1.44 Bars/s,+20.00%,0.00%,0.0300 Bars per hit,0.14 Bars/s,Between 0 - 2 Bars,0 Point(s),5 Point(s),4.20 Points/m,+5.00%,
56,Future Trunks,Normal,5 DP,23 s,4.0 Bars,0.00%,0.00%,0.00%,409,708,"1,312","1,312","1,312",4 Hit(s),+5.00%,+5.00%,0.265 Bars,328,0.20 Bars (+50% charged),7 Ki Blasts,2 Bar(s),1.40 Bars/s,0.00%,0.00%,0.0300 Bars per hit,0.18 Bars/s,Between 0 - 2 Bars,0 Point(s),4 Point(s),4.20 Points/m,+5.00%,Sword
57,"Future Trunks, Super Saiyan",Super Saiyan,6 DP,27 s,4.0 Bars,0.00%,0.00%,0.00%,475,823,"1,500","1,500","1,500",3 Hit(s),+20.00%,+20.00%,0.265 Bars,380,0.20 Bars (+50% charged),8 Ki Blasts,2 Bar(s),1.76 Bars/s,0.00%,-2.80%,0.0270 Bars per hit,0.14 Bars/s,Between 0 - 2 Bars,0 Point(s),4 Point(s),4.20 Points/m,+20.00%,"Sword, Super Movement, High-Speed Movement"
58,Trunks (Kid),Normal,4 DP,19 s,3.5 Bars,0.00%,0.00%,0.00%,390,675,"1,250","1,250","1,250",5 Hit(s),0.00%,0.00%,0.265 Bars,312,0.20 Bars (+50% charged),4 Ki Blasts,1 Bar(s),1.40 Bars/s,0.00%,0.00%,0.0300 Bars per hit,0.18 Bars/s,Between 0 - 2 Bars,0 Point(s),6 Point(s),4.20 Points/m,0.00%,
59,"Trunks (Kid), Super Saiyan",Super Saiyan,5 DP,23 s,3.5 Bars,0.00%,0.00%,0.00%,456,789,"1,437","1,437","1,437",4 Hit(s),+15.00%,+15.00%,0.265 Bars,365,0.20 Bars (+50% charged),6 Ki Blasts,2 Bar(s),1.76 Bars/s,0.00%,-2.80%,0.0270 Bars per hit,0.14 Bars/s,Between 0 - 2 Bars,0 Point(s),6 Point(s),4.20 Points/m,+15.00%,"Super Movement, High-Speed Movement"
60,Goten,Normal,4 DP,19 s,3.5 Bars,-10.00%,-10.00%,0.00%,390,675,"1,250","1,250","1,250",5 Hit(s),0.00%,0.00%,0.265 Bars,312,0.20 Bars (+50% charged),3 Ki Blasts,1 Bar(s),1.40 Bars/s,0.00%,0.00%,0.0300 Bars per hit,0.18 Bars/s,Between 0 - 2 Bars,0 Point(s),6 Point(s),4.20 Points/m,0.00%,
61,"Goten, Super Saiyan",Super Saiyan,5 DP,23 s,3.5 Bars,-10.00%,-10.00%,0.00%,456,789,"1,437","1,437","1,437",4 Hit(s),+15.00%,+15.00%,0.265 Bars,365,0.20 Bars (+50% charged),5 Ki Blasts,2 Bar(s),1.76 Bars/s,0.00%,-2.80%,0.0270 Bars per hit,0.14 Bars/s,Between 0 - 2 Bars,0 Point(s),6 Point(s),4.20 Points/m,+15.00%,"Super Movement, High-Speed Movement"
62,Vegito,Fusion,7 DP,31 s,5.0 Bars,+5.00%,+5.00%,0.00%,499,864,"1,562","1,562","1,562",1 Hit(s),+25.00%,+25.00%,0.265 Bars,400,0.22 Bars (+50% charged),10 Ki Blasts,2 Bar(s),1.54 Bars/s,+10.00%,-4.20%,0.0255 Bars per hit,0.15 Bars/s,Between 0 - 2 Bars,0 Point(s),5 Point(s),4.20 Points/m,+25.00%,"Super Movement, High-Speed Movement"
63,Super Vegito,Fusion,8 DP,35 s,5.0 Bars,+5.00%,+5.00%,0.00%,518,898,"1,625","1,625","1,625",1 Hit(s),+30.00%,+30.00%,0.265 Bars,415,0.22 Bars (+50% charged),15 Ki Blasts,2 Bar(s),1.76 Bars/s,+10.00%,-4.20%,0.0255 Bars per hit,0.13 Bars/s,Between 0 - 2 Bars,0 Point(s),6 Point(s),4.20 Points/m,+30.00%,"Super Movement, High-Speed Movement"
64,"Vegito, Super Saiyan God Super Saiyan",Fusion,10 DP,43 s,5.0 Bars,+6.90%,+6.90%,0.00%,557,965,"1,750","1,750","1,750",1 Hit(s),+40.00%,+40.00%,0.265 Bars,447,0.22 Bars (+50% charged),18 Ki Blasts,2 Bar(s),1.76 Bars/s,+10.00%,-4.20%,0.0255 Bars per hit,0.13 Bars/s,Between 0 - 2 Bars,0 Point(s),6 Point(s),4.20 Points/m,+40.00%,"Super Movement, High-Speed Movement"
65,Super Gogeta (Z),Fusion,8 DP,35 s,5.0 Bars,+5.00%,+5.00%,0.00%,518,898,"1,625","1,625","1,625",1 Hit(s),+30.00%,+30.00%,0.265 Bars,415,0.22 Bars (+50% charged),20 Ki Blasts,2 Bar(s),1.76 Bars/s,+10.00%,-4.20%,0.0255 Bars per hit,0.13 Bars/s,Between 0 - 2 Bars,0 Point(s),6 Point(s),4.20 Points/m,+30.00%,"Super Movement, High-Speed Movement"
66,Gogeta (Super),Fusion,7 DP,31 s,5.0 Bars,+5.00%,+5.00%,0.00%,499,864,"1,562","1,562","1,562",1 Hit(s),+25.00%,+25.00%,0.265 Bars,400,0.22 Bars (+50% charged),10 Ki Blasts,2 Bar(s),1.54 Bars/s,+10.00%,-4.20%,0.0255 Bars per hit,0.15 Bars/s,Between 0 - 2 Bars,0 Point(s),5 Point(s),4.20 Points/m,+25.00%,"Super Movement, High-Speed Movement"
67,"Gogeta (Super), Super Saiyan",Fusion,8 DP,35 s,5.0 Bars,+5.00%,+5.00%,0.00%,518,898,"1,625","1,625","1,625",1 Hit(s),+30.00%,+30.00%,0.265 Bars,415,0.22 Bars (+50% charged),15 Ki Blasts,2 Bar(s),1.76 Bars/s,+10.00%,-4.20%,0.0255 Bars per hit,0.13 Bars/s,Between 0 - 2 Bars,0 Point(s),5 Point(s),4.20 Points/m,+30.00%,"Super Movement, High-Speed Movement"
68,"Gogeta (Super), Super Saiyan God Super Saiyan",Fusion,10 DP,43 s,5.0 Bars,+6.90%,+6.90%,0.00%,557,965,"1,750","1,750","1,750",1 Hit(s),+40.00%,+40.00%,0.265 Bars,447,0.22 Bars (+50% charged),19 Ki Blasts,2 Bar(s),1.76 Bars/s,+10.00%,-4.20%,0.0255 Bars per hit,0.13 Bars/s,Between 0 - 2 Bars,0 Point(s),6 Point(s),4.20 Points/m,+40.00%,"Super Movement, High-Speed Movement"
69,"Gogeta (GT), Super Saiyan 4",Fusion,10 DP,43 s,5.0 Bars,+5.00%,+5.00%,0.00%,642,965,"1,750","1,750","1,750",1 Hit(s),+40.00%,+40.00%,0.265 Bars,447,0.22 Bars (+50% charged),15 Ki Blasts,2 Bar(s),1.76 Bars/s,+10.00%,-4.20%,0.0255 Bars per hit,0.13 Bars/s,Between 0 - 2 Bars,0 Point(s),6 Point(s),4.20 Points/m,+40.00%,"Super Movement, High-Speed Movement, Multi-Hit Rushes"
70,Gotenks,Fusion,6 DP,27 s,4.5 Bars,+5.00%,+5.00%,0.00%,479,830,"1,500","1,500","1,500",3 Hit(s),+20.00%,+20.00%,0.265 Bars,384,0.22 Bars (+50% charged),7 Ki Blasts,2 Bar(s),1.54 Bars/s,+10.00%,-4.20%,0.0255 Bars per hit,0.15 Bars/s,Between 0 - 2 Bars,0 Point(s),5 Point(s),4.20 Points/m,+20.00%,"Super Movement, High-Speed Movement"
71,"Gotenks, Super Saiyan",Fusion,7 DP,31 s,4.5 Bars,+5.00%,+5.00%,0.00%,499,864,"1,562","1,562","1,562",1 Hit(s),+25.00%,+25.00%,0.265 Bars,400,0.22 Bars (+50% charged),10 Ki Blasts,2 Bar(s),1.76 Bars/s,+10.00%,-4.20%,0.0255 Bars per hit,0.13 Bars/s,Between 0 - 2 Bars,0 Point(s),4 Point(s),4.20 Points/m,+25.00%,"Super Movement, High-Speed Movement"
72,"Gotenks, Super Saiyan 3",Fusion,8 DP,35 s,4.5 Bars,+5.00%,+5.00%,0.00%,518,898,"1,625","1,625","1,625",1 Hit(s),+30.00%,+30.00%,0.265 Bars,415,0.22 Bars (+50% charged),15 Ki Blasts,1 Bar(s),1.76 Bars/s,+10.00%,-4.20%,0.0255 Bars per hit,0.13 Bars/s,Between 0 - 2 Bars,0 Point(s),4 Point(s),4.20 Points/m,+30.00%,"Super Movement, High-Speed Movement"
73,Videl,Normal,2 DP,10 s,3.0 Bars,-10.00%,-10.00%,0.00%,351,607,"1,125","1,125","1,125",5 Hit(s),-10.00%,-10.00%,0.265 Bars,281,0.20 Bars (+50% charged),3 Ki Blasts,4 Bar(s),1.20 Bars/s,0.00%,0.00%,0.0300 Bars per hit,0.20 Bars/s,Between 0 - 2 Bars,1 Point(s),4 Point(s),4.20 Points/m,-10.00%,
74,Master Roshi,Skill-User,2 DP,10 s,3.0 Bars,0.00%,0.00%,0.00%,304,526,975,975,975,5 Hit(s),-22.00%,-20.00%,0.265 Bars,244,0.20 Bars (+50% charged),3 Ki Blasts,2 Bar(s),1.47 Bars/s,+5.00%,0.00%,0.0300 Bars per hit,0.26 Bars/s,Between 0 - 2 Bars,2 Point(s),4 Point(s),5.46 Points/m,-10.00%,Grounded
75,"Master Roshi, Max Power",Power,2 DP,10 s,4.0 Bars,+6.90%,+6.90%,0.00%,409,708,"1,313","1,313","1,313",5 Hit(s),-15.00%,-15.00%,0.385 Bars,234,0.22 Bars (+50% charged),3 Ki Blasts,3 Bar(s),1.44 Bars/s,+20.00%,0.00%,0.0300 Bars per hit,0.14 Bars/s,Between 0 - 2 Bars,2 Point(s),4 Point(s),4.20 Points/m,-15.00%,Grounded
76,"Frieza (Z), 1st Form",Ki-Blast,5 DP,23 s,4.0 Bars,-5.00%,-5.00%,0.00%,370,641,"1,187","1,187","1,187",4 Hit(s),+5.00%,+5.00%,0.265 Bars,375,0.16 Bars (+50% charged),4 Ki Blasts,1 Bar(s),1.54 Bars/s,-10.00%,0.00%,0.0300 Bars per hit,0.19 Bars/s,Between 0 - 2 Bars,0 Point(s),6 Point(s),4.20 Points/m,+5.00%,Scouter
77,"Frieza (Z), 2nd Form",Power,5 DP,23 s,4.0 Bars,+5.00%,+5.00%,0.00%,468,809,"1,500","1,500","1,500",4 Hit(s),0.00%,0.00%,0.385 Bars,281,0.22 Bars (+50% charged),5 Ki Blasts,2 Bar(s),1.44 Bars/s,+20.00%,0.00%,0.0300 Bars per hit,0.14 Bars/s,Between 0 - 2 Bars,0 Point(s),6 Point(s),4.20 Points/m,0.00%,
78,"Frieza (Z), 3rd Form",Villain,5 DP,23 s,4.0 Bars,+2.00%,+2.00%,0.00%,409,708,"1,500","1,500","1,312",4 Hit(s),+22.50%,+22.50%,0.265 Bars,328,0.20 Bars (+50% charged),8 Ki Blasts,2 Bar(s),1.76 Bars/s,0.00%,-2.80%,0.0270 Bars per hit,0.14 Bars/s,Between 0 - 2 Bars,0 Point(s),6 Point(s),4.20 Points/m,+15.00%,
79,"Frieza (Z), 4th Form",Villain,6 DP,27 s,4.0 Bars,0.00%,0.00%,0.00%,429,742,"1,563","1,563","1,375",3 Hit(s),+27.50%,+27.50%,0.265 Bars,343,0.20 Bars (+50% charged),9 Ki Blasts,2 Bar(s),1.54 Bars/s,0.00%,-2.80%,0.0270 Bars per hit,0.16 Bars/s,Between 0 - 2 Bars,0 Point(s),6 Point(s),4.20 Points/m,+20.00%,
80,"Frieza (Z), Full Power",Villain,7 DP,31 s,4.0 Bars,+5.00%,+5.00%,0.00%,448,776,"1,625","1,625","1,437",1 Hit(s),+32.50%,+32.50%,0.385 Bars,359,0.20 Bars (+50% charged),10 Ki Blasts,3 Bar(s),1.76 Bars/s,0.00%,-2.80%,0.0270 Bars per hit,0.14 Bars/s,Between 0 - 2 Bars,0 Point(s),6 Point(s),4.20 Points/m,+25.00%,
81,Mecha Frieza,Ki-Blast,6 DP,27 s,4.0 Bars,-5.00%,-5.00%,0.00%,390,675,"1,250","1,250","1,250",3 Hit(s),+10.00%,+10.00%,0.265 Bars,390,0.16 Bars (+50% charged),10 Ki Blasts,2 Bar(s),1.54 Bars/s,-10.00%,0.00%,0.0300 Bars per hit,0.19 Bars/s,Between 0 - 2 Bars,0 Point(s),4 Point(s),4.20 Points/m,+10.00%,"Super Movement, High-Speed Movement"
82,Frieza (Super),Normal,6 DP,27 s,4.0 Bars,0.00%,0.00%,0.00%,429,742,"1,375","1,375","1,375",3 Hit(s),+10.00%,+10.00%,0.265 Bars,343,0.20 Bars (+50% charged),10 Ki Blasts,2 Bar(s),1.40 Bars/s,0.00%,0.00%,0.0300 Bars per hit,0.18 Bars/s,Between 0 - 2 Bars,0 Point(s),6 Point(s),4.20 Points/m,+10.00%,High-Speed Movement
83,Golden Frieza,Almighty,8 DP,35 s,4.0 Bars,+2.00%,+2.00%,0.00%,507,878,"1,625","1,625","1,625",1 Hit(s),+30.00%,+30.00%,0.265 Bars,405,0.20 Bars (+50% charged),16 Ki Blasts,3 Bar(s),1.44 Bars/s,+10.00%,0.00%,0.0300 Bars per hit,0.15 Bars/s,Between 0 - 2 Bars,0 Point(s),6 Point(s),4.20 Points/m,+30.00%,"Super Movement, High-Speed Movement"
84,"Cell, 1st Form",Normal,5 DP,23 s,4.0 Bars,0.00%,0.00%,0.00%,409,708,"1,312","1,312","1,312",4 Hit(s),+5.00%,+5.00%,0.265 Bars,328,0.20 Bars (+50% charged),5 Ki Blasts,1 Bar(s),1.60 Bars/s,0.00%,0.00%,0.0300 Bars per hit,0.15 Bars/s,Between 0 - 2 Bars,0 Point(s),4 Point(s),4.20 Points/m,+5.00%,HP Drain Grab
85,"Cell, 2nd Form",Normal,5 DP,23 s,4.0 Bars,+3.00%,+3.00%,0.00%,409,708,"1,312","1,312","1,312",4 Hit(s),+5.00%,+5.00%,0.265 Bars,328,0.20 Bars (+50% charged),6 Ki Blasts,2 Bar(s),1.40 Bars/s,0.00%,0.00%,0.0300 Bars per hit,0.18 Bars/s,Between 0 - 2 Bars,0 Point(s),5 Point(s),4.20 Points/m,+5.00%,HP Drain Grab
86,"Cell, Perfect Form",Villain,6 DP,27 s,4.0 Bars,0.00%,0.00%,0.00%,429,742,"1,563","1,563","1,375",3 Hit(s),+27.50%,+27.50%,0.265 Bars,343,0.20 Bars (+50% charged),8 Ki Blasts,2 Bar(s),1.32 Bars/s,0.00%,-2.80%,0.0270 Bars per hit,0.18 Bars/s,Between 0 - 2 Bars,0 Point(s),5 Point(s),4.20 Points/m,+20.00%,"Super Movement, High-Speed Movement"
87,Perfect Cell,Almighty,7 DP,31 s,4.0 Bars,0.00%,0.00%,0.00%,487,844,"1,562","1,562","1,562",1 Hit(s),+25.00%,+25.00%,0.265 Bars,390,0.20 Bars (+50% charged),10 Ki Blasts,3 Bar(s),1.08 Bars/s,+10.00%,0.00%,0.0300 Bars per hit,0.20 Bars/s,Between 0 - 2 Bars,0 Point(s),6 Point(s),4.20 Points/m,+25.00%,"Super Movement, High-Speed Movement"
88,Cell Jr.,Normal,3 DP,15 s,3.5 Bars,0.00%,0.00%,0.00%,370,641,"1,187","1,187","1,187",5 Hit(s),-5.00%,-5.00%,0.265 Bars,296,0.20 Bars (+50% charged),4 Ki Blasts,1 Bar(s),1.60 Bars/s,0.00%,0.00%,0.0300 Bars per hit,0.15 Bars/s,Between 0 - 2 Bars,1 Point(s),4 Point(s),4.20 Points/m,-5.00%,"Super Movement, High-Speed Movement"
89,Majin Buu,Power,6 DP,27 s,4.0 Bars,+8.80%,+8.80%,0.00%,487,843,"1,563","1,563","1,563",3 Hit(s),+5.00%,+5.00%,0.385 Bars,296,0.22 Bars (+50% charged),5 Ki Blasts,2 Bar(s),1.26 Bars/s,+20.00%,0.00%,0.0300 Bars per hit,0.16 Bars/s,Between 0 - 2 Bars,0 Point(s),4 Point(s),4.20 Points/m,+5.00%,
90,Majin Buu (Evil),Speed,6 DP,27 s,4.0 Bars,-10.00%,-10.00%,0.00%,409,607,"1,250","1,250","1,250",3 Hit(s),+10.00%,+10.00%,0.125 Bars,343,0.21 Bars (+50% charged),4 Ki Blasts,2 Bar(s),1.40 Bars/s,0.00%,0.00%,0.0300 Bars per hit,0.18 Bars/s,Between 0 - 2 Bars,0 Point(s),4 Point(s),4.41 Points/m,+10.00%,
91,Super Buu,Villain,6 DP,27 s,4.0 Bars,0.00%,0.00%,0.00%,429,742,"1,563","1,563","1,375",3 Hit(s),+27.50%,+27.50%,0.265 Bars,343,0.20 Bars (+50% charged),6 Ki Blasts,3 Bar(s),1.54 Bars/s,0.00%,-2.80%,0.0270 Bars per hit,0.16 Bars/s,Between 0 - 2 Bars,0 Point(s),5 Point(s),4.20 Points/m,+20.00%,
92,Super Buu (Gotenks Absorbed),Almighty,7 DP,31 s,4.0 Bars,0.00%,0.00%,0.00%,487,844,"1,562","1,562","1,562",1 Hit(s),+25.00%,+25.00%,0.265 Bars,390,0.20 Bars (+50% charged),8 Ki Blasts,3 Bar(s),1.26 Bars/s,+10.00%,0.00%,0.0300 Bars per hit,0.18 Bars/s,Between 0 - 2 Bars,0 Point(s),6 Point(s),4.20 Points/m,+25.00%,
93,Super Buu (Gohan Absorbed),Almighty,7 DP,31 s,4.0 Bars,0.00%,0.00%,0.00%,487,844,"1,562","1,562","1,562",1 Hit(s),+25.00%,+25.00%,0.265 Bars,390,0.20 Bars (+50% charged),10 Ki Blasts,3 Bar(s),1.26 Bars/s,+10.00%,0.00%,0.0300 Bars per hit,0.18 Bars/s,Between 0 - 2 Bars,0 Point(s),6 Point(s),4.20 Points/m,+25.00%,"Super Movement, High-Speed Movement"
94,Kid Buu,Almighty,7 DP,31 s,4.0 Bars,0.00%,0.00%,0.00%,561,844,"1,562","1,562","1,562",1 Hit(s),+25.00%,+25.00%,0.265 Bars,390,0.20 Bars (+50% charged),10 Ki Blasts,3 Bar(s),1.08 Bars/s,+10.00%,0.00%,0.0300 Bars per hit,0.20 Bars/s,Between 0 - 2 Bars,0 Point(s),5 Point(s),4.20 Points/m,+25.00%,"Super Movement, High-Speed Movement, Multi-Hit Rushes"
95,Mr. Satan,Skill-User,1 DP,5 s,3.0 Bars,-17.00%,-17.00%,0.00%,89,155,287,287,287,5 Hit(s),-77.00%,-75.00%,0.125 Bars,72,0.20 Bars (+50% charged),1 Ki Blasts,5 Bar(s),1.47 Bars/s,+5.00%,0.00%,0.0300 Bars per hit,0.26 Bars/s,Between 0 - 2 Bars,3 Point(s),4 Point(s),5.46 Points/m,-65.00%,Grounded
96,Chiaotzu,Ki-Blast,2 DP,10 s,3.0 Bars,-20.75%,-20.75%,0.00%,312,540,"1,000","1,000","1,000",5 Hit(s),-10.00%,-10.00%,0.265 Bars,328,0.16 Bars (+50% charged),6 Ki Blasts,1 Bar(s),1.54 Bars/s,-10.00%,0.00%,0.0300 Bars per hit,0.19 Bars/s,Between 0 - 2 Bars,2 Point(s),4 Point(s),4.20 Points/m,-10.00%,"High-Speed Movement, Paralyze Ki-Blast"
97,Yajirobe,Skill-User (Yajirobe),2 DP,10 s,3.5 Bars,0.00%,0.00%,0.00%,304,526,975,975,975,5 Hit(s),-22.00%,-20.00%,0.125 Bars,244,0.20 Bars (+50% charged),1 Ki Blasts,1 Bar(s),1.47 Bars/s,+5.00%,0.00%,0.0300 Bars per hit,0.26 Bars/s,Between 0 - 2 Bars,0 Point(s),6 Point(s),4.20 Points/m,-10.00%,"Grounded, Sword"
98,Pan (GT),Normal,3 DP,15 s,3.5 Bars,-12.00%,-12.00%,0.00%,370,641,"1,187","1,187","1,187",5 Hit(s),-5.00%,-5.00%,0.265 Bars,296,0.20 Bars (+50% charged),5 Ki Blasts,3 Bar(s),1.40 Bars/s,0.00%,0.00%,0.0300 Bars per hit,0.18 Bars/s,Between 0 - 2 Bars,2 Point(s),4 Point(s),4.20 Points/m,-5.00%,"Super Movement, High-Speed Movement"
99,Uub (GT),Normal,4 DP,19 s,4.0 Bars,0.00%,0.00%,0.00%,390,675,"1,250","1,250","1,250",5 Hit(s),0.00%,0.00%,0.265 Bars,312,0.20 Bars (+50% charged),5 Ki Blasts,2 Bar(s),1.40 Bars/s,0.00%,0.00%,0.0300 Bars per hit,0.18 Bars/s,Between 0 - 2 Bars,0 Point(s),4 Point(s),4.20 Points/m,0.00%,
100,Majuub (GT),Normal,6 DP,27 s,4.0 Bars,0.00%,0.00%,0.00%,429,742,"1,375","1,375","1,375",3 Hit(s),+10.00%,+10.00%,0.265 Bars,343,0.20 Bars (+50% charged),7 Ki Blasts,3 Bar(s),1.40 Bars/s,0.00%,0.00%,0.0300 Bars per hit,0.18 Bars/s,Between 0 - 2 Bars,0 Point(s),5 Point(s),4.20 Points/m,+10.00%,Super Movement
101,Bardock,Normal,4 DP,19 s,4.0 Bars,0.00%,0.00%,0.00%,390,675,"1,250","1,250","1,250",5 Hit(s),0.00%,0.00%,0.265 Bars,312,0.20 Bars (+50% charged),7 Ki Blasts,3 Bar(s),1.40 Bars/s,0.00%,0.00%,0.0300 Bars per hit,0.18 Bars/s,Between 0 - 2 Bars,0 Point(s),5 Point(s),4.20 Points/m,0.00%,Scouter
102,Raditz,Normal,3 DP,15 s,4.0 Bars,0.00%,0.00%,0.00%,370,641,"1,187","1,187","1,187",5 Hit(s),-5.00%,-5.00%,0.265 Bars,296,0.20 Bars (+50% charged),6 Ki Blasts,1 Bar(s),1.40 Bars/s,0.00%,0.00%,0.0300 Bars per hit,0.18 Bars/s,Between 0 - 2 Bars,1 Point(s),4 Point(s),4.20 Points/m,-5.00%,
103,Saibaman,Normal,2 DP,10 s,3.5 Bars,-10.00%,-10.00%,0.00%,351,607,"1,125","1,125","1,125",5 Hit(s),-10.00%,-10.00%,0.265 Bars,281,0.20 Bars (+50% charged),3 Ki Blasts,1 Bar(s),1.60 Bars/s,0.00%,0.00%,0.0300 Bars per hit,0.15 Bars/s,Between 0 - 2 Bars,2 Point(s),4 Point(s),4.20 Points/m,-10.00%,High-Speed Movement
104,Nappa,Power,3 DP,15 s,4.5 Bars,+12.60%,+12.60%,0.00%,429,742,"1,375","1,375","1,375",5 Hit(s),-10.00%,-10.00%,0.385 Bars,249,0.22 Bars (+50% charged),6 Ki Blasts,2 Bar(s),1.26 Bars/s,+20.00%,0.00%,0.0300 Bars per hit,0.16 Bars/s,Between 0 - 2 Bars,0 Point(s),4 Point(s),4.20 Points/m,-10.00%,Scouter
105,Zarbon,Speed,3 DP,15 s,4.0 Bars,-10.00%,-10.00%,0.00%,351,506,"1,062","1,062","1,062",5 Hit(s),-5.00%,-5.00%,0.125 Bars,296,0.21 Bars (+50% charged),6 Ki Blasts,2 Bar(s),1.40 Bars/s,0.00%,0.00%,0.0300 Bars per hit,0.18 Bars/s,Between 0 - 2 Bars,0 Point(s),4 Point(s),4.41 Points/m,-5.00%,Scouter
106,Super Zarbon,Power,3 DP,15 s,4.0 Bars,+6.90%,+6.90%,0.00%,429,742,"1,375","1,375","1,375",5 Hit(s),-10.00%,-10.00%,0.385 Bars,249,0.22 Bars (+50% charged),7 Ki Blasts,2 Bar(s),1.26 Bars/s,+20.00%,0.00%,0.0300 Bars per hit,0.16 Bars/s,Between 0 - 2 Bars,0 Point(s),4 Point(s),4.20 Points/m,-10.00%,
107,Dodoria,Power,3 DP,15 s,4.0 Bars,+9.75%,+9.75%,0.00%,429,742,"1,375","1,375","1,375",5 Hit(s),-10.00%,-10.00%,0.385 Bars,249,0.22 Bars (+50% charged),5 Ki Blasts,2 Bar(s),1.44 Bars/s,+20.00%,0.00%,0.0300 Bars per hit,0.14 Bars/s,Between 0 - 2 Bars,0 Point(s),4 Point(s),4.20 Points/m,-10.00%,
108,Cui,Normal,3 DP,15 s,4.0 Bars,0.00%,0.00%,0.00%,370,641,"1,187","1,187","1,187",5 Hit(s),-5.00%,-5.00%,0.265 Bars,296,0.20 Bars (+50% charged),8 Ki Blasts,1 Bar(s),1.40 Bars/s,0.00%,0.00%,0.0300 Bars per hit,0.18 Bars/s,Between 0 - 2 Bars,2 Point(s),4 Point(s),4.20 Points/m,-5.00%,
109,Captain Ginyu,Normal,4 DP,19 s,4.0 Bars,0.00%,0.00%,0.00%,390,675,"1,250","1,250","1,250",5 Hit(s),0.00%,0.00%,0.265 Bars,312,0.20 Bars (+50% charged),7 Ki Blasts,3 Bar(s),1.40 Bars/s,0.00%,0.00%,0.0300 Bars per hit,0.18 Bars/s,Between 0 - 2 Bars,0 Point(s),4 Point(s),4.20 Points/m,0.00%,Scouter
110,Recoome,Power,3 DP,15 s,4.5 Bars,+14.50%,+14.50%,0.00%,429,742,"1,375","1,375","1,375",5 Hit(s),-10.00%,-10.00%,0.385 Bars,249,0.22 Bars (+50% charged),8 Ki Blasts,2 Bar(s),1.26 Bars/s,+20.00%,0.00%,0.0300 Bars per hit,0.16 Bars/s,Between 0 - 2 Bars,0 Point(s),4 Point(s),4.20 Points/m,-10.00%,Scouter
111,Burter,Speed,3 DP,15 s,4.0 Bars,-21.00%,-21.00%,0.00%,404,506,"1,062","1,062","1,062",5 Hit(s),-5.00%,-5.00%,0.075 Bars,296,0.21 Bars (+50% charged),4 Ki Blasts,1 Bar(s),1.40 Bars/s,0.00%,0.00%,0.0300 Bars per hit,0.18 Bars/s,Between 0 - 2 Bars,0 Point(s),4 Point(s),4.41 Points/m,-5.00%,"Scouter, Super Movement, High-Speed Movement, Multi-Hit Rushes"
112,Jeice,Normal,3 DP,15 s,4.0 Bars,0.00%,0.00%,0.00%,370,641,"1,187","1,187","1,187",5 Hit(s),-5.00%,-5.00%,0.265 Bars,296,0.20 Bars (+50% charged),5 Ki Blasts,1 Bar(s),1.40 Bars/s,0.00%,0.00%,0.0300 Bars per hit,0.18 Bars/s,Between 0 - 2 Bars,0 Point(s),4 Point(s),4.20 Points/m,-5.00%,
113,Guldo,Normal,2 DP,10 s,3.0 Bars,-10.00%,-10.00%,0.00%,351,607,"1,125","1,125","1,125",5 Hit(s),-10.00%,-10.00%,0.265 Bars,281,0.20 Bars (+50% charged),3 Ki Blasts,1 Bar(s),1.40 Bars/s,0.00%,0.00%,0.0300 Bars per hit,0.18 Bars/s,Between 0 - 2 Bars,1 Point(s),4 Point(s),4.20 Points/m,-10.00%,Paralyze Ki-Blast
114,King Cold,Power,4 DP,19 s,4.0 Bars,+5.00%,+5.00%,0.00%,448,776,"1,438","1,438","1,438",5 Hit(s),-5.00%,-5.00%,0.385 Bars,265,0.22 Bars (+50% charged),5 Ki Blasts,2 Bar(s),1.44 Bars/s,+20.00%,0.00%,0.0300 Bars per hit,0.14 Bars/s,Between 0 - 2 Bars,0 Point(s),4 Point(s),4.20 Points/m,-5.00%,
115,Android 16,Infinite Ki Android (Power),5 DP,23 s,4.0 Bars,+12.60%,+12.60%,0.00%,468,809,"1,500","1,500","1,500",4 Hit(s),0.00%,0.00%,0.385 Bars,281,0.22 Bars (+50% charged),4 Ki Blasts,3 Bar(s),0.00 Bars/s,+20.00%,0.00%,0.0390 Bars per hit,0.15 Bars/s,Between 0 - 5 Bars,1 Point(s),4 Point(s),4.20 Points/m,0.00%,
116,Android 17 (Z),Infinite Ki Android (Ki-Blast),5 DP,23 s,4.0 Bars,-5.00%,-5.00%,0.00%,370,641,"1,187","1,187","1,187",4 Hit(s),+5.00%,+5.00%,0.265 Bars,375,0.16 Bars (+50% charged),5 Ki Blasts,3 Bar(s),0.00 Bars/s,-10.00%,0.00%,0.0390 Bars per hit,0.20 Bars/s,Between 0 - 5 Bars,1 Point(s),4 Point(s),4.20 Points/m,+5.00%,"Super Movement, High-Speed Movement"
117,Android 17 (Super),Infinite Ki Android (Ki-Blast),6 DP,27 s,4.0 Bars,-5.00%,-5.00%,0.00%,390,675,"1,250","1,250","1,250",3 Hit(s),+10.00%,+10.00%,0.265 Bars,390,0.16 Bars (+50% charged),8 Ki Blasts,3 Bar(s),0.00 Bars/s,-10.00%,0.00%,0.0390 Bars per hit,0.22 Bars/s,Between 0 - 5 Bars,1 Point(s),4 Point(s),4.20 Points/m,+10.00%,"Super Movement, High-Speed Movement"
118,Android 18,Infinite Ki Android (Ki-Blast),5 DP,23 s,4.0 Bars,-5.00%,-5.00%,0.00%,370,641,"1,187","1,187","1,187",4 Hit(s),+5.00%,+5.00%,0.265 Bars,375,0.16 Bars (+50% charged),6 Ki Blasts,3 Bar(s),0.00 Bars/s,-10.00%,0.00%,0.0390 Bars per hit,0.22 Bars/s,Between 0 - 5 Bars,1 Point(s),4 Point(s),4.20 Points/m,+5.00%,"Super Movement, High-Speed Movement"
119,Android 19,Ki Drain Android (Power),4 DP,19 s,4.0 Bars,+6.90%,+6.90%,0.00%,448,776,"1,438","1,438","1,438",5 Hit(s),-5.00%,-5.00%,0.125 Bars,265,0.22 Bars (+50% charged),3 Ki Blasts,4 Bar(s),0.00 Bars/s,+20.00%,0.00%,0.0640 Bars per hit,0.41 Bars/s,Between 0 - 2 Bars,2 Point(s),4 Point(s),4.20 Points/m,-5.00%,"HP Drain Grab, Free Dragon Dash"
120,Dr. Gero,Ki Drain Android (Normal),4 DP,19 s,4.0 Bars,0.00%,0.00%,0.00%,390,675,"1,250","1,250","1,250",5 Hit(s),0.00%,0.00%,0.125 Bars,312,0.20 Bars (+50% charged),3 Ki Blasts,4 Bar(s),0.00 Bars/s,0.00%,0.00%,0.0640 Bars per hit,0.45 Bars/s,Between 0 - 2 Bars,2 Point(s),6 Point(s),4.20 Points/m,0.00%,"HP Drain Grab, Free Dragon Dash, Super Movement, High-Speed Movement"
121,Babidi,Ki-Blast,3 DP,15 s,3.0 Bars,-26.00%,-26.00%,0.00%,331,574,"1,062","1,062","1,062",5 Hit(s),-5.00%,-5.00%,0.265 Bars,343,0.16 Bars (+50% charged),8 Ki Blasts,3 Bar(s),1.32 Bars/s,-10.00%,0.00%,0.0300 Bars per hit,0.22 Bars/s,Between 0 - 2 Bars,2 Point(s),7 Point(s),4.20 Points/m,-5.00%,Paralyze Ki-Blast
122,Dabura,Villain,6 DP,27 s,4.0 Bars,0.00%,0.00%,0.00%,429,742,"1,563","1,563","1,375",3 Hit(s),+27.50%,+27.50%,0.265 Bars,343,0.20 Bars (+50% charged),7 Ki Blasts,3 Bar(s),1.54 Bars/s,0.00%,-2.80%,0.0270 Bars per hit,0.16 Bars/s,Between 0 - 2 Bars,0 Point(s),5 Point(s),4.20 Points/m,+20.00%,"Sword, Super Movement, High-Speed Movement"
123,Frieza Force Soldier,Normal,2 DP,10 s,3.0 Bars,-20.00%,-20.00%,0.00%,351,607,"1,125","1,125","1,125",5 Hit(s),-10.00%,-10.00%,0.265 Bars,281,0.20 Bars (+50% charged),2 Ki Blasts,1 Bar(s),1.60 Bars/s,0.00%,0.00%,0.0300 Bars per hit,0.15 Bars/s,Between 0 - 2 Bars,2 Point(s),4 Point(s),4.20 Points/m,-10.00%,Scouter
124,Broly (Z),Normal,5 DP,23 s,4.0 Bars,0.00%,0.00%,0.00%,409,708,"1,312","1,312","1,312",4 Hit(s),+5.00%,+5.00%,0.265 Bars,328,0.20 Bars (+50% charged),3 Ki Blasts,1 Bar(s),1.60 Bars/s,0.00%,0.00%,0.0300 Bars per hit,0.15 Bars/s,Between 0 - 2 Bars,0 Point(s),4 Point(s),4.20 Points/m,+5.00%,
125,"Broly (Z), Super Saiyan",Power,7 DP,31 s,4.0 Bars,+5.00%,+5.00%,0.00%,507,877,"1,625","1,625","1,625",1 Hit(s),+10.00%,+10.00%,0.265 Bars,312,0.22 Bars (+50% charged),7 Ki Blasts,2 Bar(s),1.26 Bars/s,+20.00%,0.00%,0.0300 Bars per hit,0.16 Bars/s,Between 0 - 2 Bars,0 Point(s),5 Point(s),4.20 Points/m,+10.00%,
126,"Broly (Z), Legendary Super Saiyan",Legendary Super Saiyan,9 DP,39 s,4.5 Bars,-1.70%,-1.70%,+10.00%,624,"1,079","2,000","2,000","1,562",1 Hit(s),+30.00%,+30.00%,0.265 Bars,421,0.20 Bars (+50% charged),10 Ki Blasts,3 Bar(s),1.40 Bars/s,0.00%,0.00%,0.0300 Bars per hit,0.18 Bars/s,Between 0 - 2 Bars,0 Point(s),6 Point(s),4.20 Points/m,+35.00%,Super Armor
127,Broly (Super),Normal,5 DP,23 s,4.0 Bars,0.00%,0.00%,0.00%,409,708,"1,312","1,312","1,312",4 Hit(s),+5.00%,+5.00%,0.265 Bars,328,0.20 Bars (+50% charged),4 Ki Blasts,1 Bar(s),1.40 Bars/s,0.00%,0.00%,0.0300 Bars per hit,0.18 Bars/s,Between 0 - 2 Bars,0 Point(s),4 Point(s),4.20 Points/m,+5.00%,
128,"Broly (Super), Super Saiyan",Power,7 DP,31 s,4.0 Bars,+5.00%,+5.00%,0.00%,507,877,"1,625","1,625","1,625",1 Hit(s),+10.00%,+10.00%,0.265 Bars,312,0.22 Bars (+50% charged),7 Ki Blasts,2 Bar(s),1.26 Bars/s,+20.00%,0.00%,0.0300 Bars per hit,0.16 Bars/s,Between 0 - 2 Bars,0 Point(s),5 Point(s),4.20 Points/m,+10.00%,High-Speed Movement
129,"Broly (Super), Super Saiyan (Full Power)",Legendary Super Saiyan,9 DP,39 s,4.5 Bars,-1.70%,-1.70%,+10.00%,624,"1,079","2,000","2,000","1,562",1 Hit(s),+30.00%,+30.00%,0.265 Bars,421,0.20 Bars (+50% charged),10 Ki Blasts,3 Bar(s),1.40 Bars/s,0.00%,0.00%,0.0300 Bars per hit,0.18 Bars/s,Between 0 - 2 Bars,0 Point(s),6 Point(s),4.20 Points/m,+35.00%,"Super Armor, Super Movement, High-Speed Movement"
130,Super Garlic Jr.,Power,4 DP,19 s,4.0 Bars,+8.80%,+8.80%,0.00%,448,776,"1,438","1,438","1,438",5 Hit(s),-5.00%,-5.00%,0.265 Bars,265,0.22 Bars (+50% charged),5 Ki Blasts,3 Bar(s),1.26 Bars/s,+20.00%,0.00%,0.0300 Bars per hit,0.16 Bars/s,Between 0 - 2 Bars,0 Point(s),5 Point(s),4.20 Points/m,-5.00%,
131,Dr. Wheelo,Giant,4 DP,19 s,5.0 Bars,+31.40%,-7.80%,+10.00%,630,"2,363","4,375","1,438","1,250",1 Hit(s),+10.00%,+10.00%,0.515 Bars,421,0.20 Bars (+50% charged),6 Ki Blasts,3 Bar(s),0.00 Bars/s,0.00%,0.00%,0.0315 Bars per hit,0.17 Bars/s,Between 0 - 5 Bars,1 Point(s),6 Point(s),4.20 Points/m,0.00%,Super Armor
132,Turles,Ki-Blast,4 DP,19 s,4.0 Bars,-5.00%,-5.00%,0.00%,351,608,"1,125","1,125","1,125",5 Hit(s),0.00%,0.00%,0.265 Bars,359,0.16 Bars (+50% charged),7 Ki Blasts,2 Bar(s),1.54 Bars/s,-10.00%,0.00%,0.0300 Bars per hit,0.19 Bars/s,Between 0 - 2 Bars,0 Point(s),4 Point(s),4.20 Points/m,0.00%,Scouter
133,Lord Slug,Power,4 DP,19 s,4.0 Bars,+5.00%,+5.00%,0.00%,448,776,"1,438","1,438","1,438",5 Hit(s),-5.00%,-5.00%,0.265 Bars,265,0.22 Bars (+50% charged),3 Ki Blasts,2 Bar(s),1.26 Bars/s,+20.00%,0.00%,0.0300 Bars per hit,0.16 Bars/s,Between 0 - 2 Bars,0 Point(s),5 Point(s),4.20 Points/m,-5.00%,Paralyze Ki-Blast
134,"Lord Slug, Giant Form",Giant,6 DP,27 s,5.0 Bars,+32.10%,-6.70%,+10.00%,682,"2,430","4,500","1,563","1,375",1 Hit(s),+20.00%,+20.00%,0.515 Bars,468,0.20 Bars (+50% charged),4 Ki Blasts,3 Bar(s),1.60 Bars/s,0.00%,0.00%,0.0315 Bars per hit,0.15 Bars/s,Between 0 - 2 Bars,0 Point(s),5 Point(s),4.20 Points/m,+10.00%,Super Armor
135,Cooler,Normal,6 DP,27 s,4.0 Bars,0.00%,0.00%,0.00%,429,742,"1,375","1,375","1,375",3 Hit(s),+10.00%,+10.00%,0.265 Bars,343,0.20 Bars (+50% charged),4 Ki Blasts,2 Bar(s),1.40 Bars/s,0.00%,0.00%,0.0300 Bars per hit,0.18 Bars/s,Between 0 - 2 Bars,0 Point(s),4 Point(s),4.20 Points/m,+10.00%,Paralyze Ki-Blast
136,"Cooler, Final Form",Power,7 DP,31 s,4.5 Bars,+5.00%,+5.00%,0.00%,507,877,"1,625","1,625","1,625",1 Hit(s),+10.00%,+10.00%,0.265 Bars,312,0.22 Bars (+50% charged),7 Ki Blasts,2 Bar(s),1.26 Bars/s,+20.00%,0.00%,0.0300 Bars per hit,0.16 Bars/s,Between 0 - 2 Bars,0 Point(s),5 Point(s),4.20 Points/m,+10.00%,Paralyze Ki-Blast
137,Metal Cooler,Villain,7 DP,31 s,4.0 Bars,0.00%,0.00%,0.00%,448,776,"1,625","1,625","1,437",1 Hit(s),+32.50%,+32.50%,0.265 Bars,359,0.20 Bars (+50% charged),6 Ki Blasts,3 Bar(s),1.32 Bars/s,0.00%,-2.80%,0.0270 Bars per hit,0.18 Bars/s,Between 0 - 5 Bars,0 Point(s),4 Point(s),4.20 Points/m,+25.00%,"Super Movement, High-Speed Movement"
138,Android 13,Infinite Ki Android (Ki-Blast),5 DP,23 s,4.0 Bars,-5.00%,-5.00%,0.00%,370,641,"1,187","1,187","1,187",4 Hit(s),+5.00%,+5.00%,0.265 Bars,375,0.16 Bars (+50% charged),4 Ki Blasts,3 Bar(s),0.00 Bars/s,-10.00%,0.00%,0.0390 Bars per hit,0.20 Bars/s,Between 0 - 5 Bars,2 Point(s),5 Point(s),4.20 Points/m,+5.00%,
139,Fusion Android 13,Infinite Ki Android (Power),7 DP,31 s,4.5 Bars,+8.80%,+8.80%,0.00%,507,877,"1,625","1,625","1,625",1 Hit(s),+10.00%,+10.00%,0.265 Bars,312,0.22 Bars (+50% charged),8 Ki Blasts,3 Bar(s),0.00 Bars/s,+20.00%,0.00%,0.0390 Bars per hit,0.18 Bars/s,Between 0 - 5 Bars,0 Point(s),6 Point(s),4.20 Points/m,+10.00%,
140,Bojack,Power,5 DP,23 s,4.0 Bars,+5.00%,+5.00%,0.00%,468,809,"1,500","1,500","1,500",4 Hit(s),0.00%,0.00%,0.265 Bars,281,0.22 Bars (+50% charged),4 Ki Blasts,1 Bar(s),1.26 Bars/s,+20.00%,0.00%,0.0300 Bars per hit,0.16 Bars/s,Between 0 - 2 Bars,0 Point(s),4 Point(s),4.20 Points/m,0.00%,
141,Full-Power Bojack,Power,7 DP,31 s,4.5 Bars,+7.85%,+7.85%,0.00%,507,877,"1,625","1,625","1,625",1 Hit(s),+10.00%,+10.00%,0.385 Bars,312,0.22 Bars (+50% charged),7 Ki Blasts,2 Bar(s),1.26 Bars/s,+20.00%,0.00%,0.0300 Bars per hit,0.16 Bars/s,Between 0 - 2 Bars,0 Point(s),4 Point(s),4.20 Points/m,+10.00%,Paralyze Ki-Blast
142,Janemba,Giant,5 DP,23 s,5.0 Bars,+34.90%,-2.30%,+10.00%,656,"2,396","4,437","1,500","1,312",1 Hit(s),+15.00%,+15.00%,0.515 Bars,444,0.20 Bars (+50% charged),2 Ki Blasts,2 Bar(s),1.60 Bars/s,0.00%,0.00%,0.0315 Bars per hit,0.15 Bars/s,Between 0 - 2 Bars,0 Point(s),4 Point(s),4.20 Points/m,+5.00%,Super Armor
143,Super Janemba,Almighty,7 DP,31 s,4.0 Bars,0.00%,0.00%,0.00%,487,844,"1,562","1,562","1,562",1 Hit(s),+25.00%,+25.00%,0.265 Bars,390,0.20 Bars (+50% charged),10 Ki Blasts,3 Bar(s),0.99 Bars/s,+10.00%,0.00%,0.0300 Bars per hit,0.23 Bars/s,Between 0 - 2 Bars,0 Point(s),5 Point(s),4.20 Points/m,+25.00%,"Sword, Super Movement, High-Speed Movement"
144,Tapion,Speed,4 DP,19 s,4.0 Bars,-10.00%,-10.00%,0.00%,370,540,"1,125","1,125","1,125",5 Hit(s),0.00%,0.00%,0.125 Bars,312,0.21 Bars (+50% charged),4 Ki Blasts,2 Bar(s),1.40 Bars/s,0.00%,0.00%,0.0300 Bars per hit,0.18 Bars/s,Between 0 - 2 Bars,0 Point(s),4 Point(s),4.41 Points/m,0.00%,"Sword, High-Speed Movement"
145,Hirudegarn,Giant,6 DP,27 s,5.0 Bars,+30.00%,-10.00%,+10.00%,682,"2,430","4,500","1,563","1,375",1 Hit(s),+20.00%,+20.00%,0.515 Bars,468,0.20 Bars (+50% charged),3 Ki Blasts,4 Bar(s),1.60 Bars/s,0.00%,0.00%,0.0315 Bars per hit,0.15 Bars/s,Between 0 - 2 Bars,0 Point(s),5 Point(s),4.20 Points/m,+10.00%,Super Armor
146,Baby Vegeta (GT),Normal,5 DP,23 s,4.0 Bars,0.00%,0.00%,0.00%,409,708,"1,312","1,312","1,312",4 Hit(s),+5.00%,+5.00%,0.265 Bars,328,0.20 Bars (+50% charged),4 Ki Blasts,2 Bar(s),1.40 Bars/s,0.00%,0.00%,0.0300 Bars per hit,0.18 Bars/s,Between 0 - 2 Bars,0 Point(s),5 Point(s),4.20 Points/m,+5.00%,
147,Super Baby 1 (GT),Normal,6 DP,27 s,4.0 Bars,0.00%,0.00%,0.00%,429,742,"1,375","1,375","1,375",3 Hit(s),+10.00%,+10.00%,0.265 Bars,343,0.20 Bars (+50% charged),6 Ki Blasts,2 Bar(s),1.60 Bars/s,0.00%,0.00%,0.0300 Bars per hit,0.15 Bars/s,Between 0 - 2 Bars,0 Point(s),5 Point(s),4.20 Points/m,+10.00%,"Super Movement, High-Speed Movement"
148,Super Baby 2 (GT),Almighty,7 DP,31 s,4.0 Bars,0.00%,0.00%,0.00%,487,844,"1,562","1,562","1,562",1 Hit(s),+25.00%,+25.00%,0.265 Bars,390,0.20 Bars (+50% charged),10 Ki Blasts,2 Bar(s),1.44 Bars/s,+10.00%,0.00%,0.0300 Bars per hit,0.15 Bars/s,Between 0 - 2 Bars,0 Point(s),5 Point(s),4.20 Points/m,+25.00%,"Super Movement, High-Speed Movement"
149,Great Ape Baby (GT),Giant,7 DP,31 s,5.0 Bars,+37.00%,+1.00%,+10.00%,708,"2,464","4,562","1,625","1,437",1 Hit(s),+25.00%,+25.00%,0.515 Bars,491,0.20 Bars (+50% charged),4 Ki Blasts,3 Bar(s),1.60 Bars/s,0.00%,0.00%,0.0315 Bars per hit,0.15 Bars/s,Between 0 - 2 Bars,0 Point(s),5 Point(s),4.20 Points/m,+15.00%,Super Armor
150,Syn Shenron (GT),Power,7 DP,31 s,4.0 Bars,+6.90%,+6.90%,0.00%,507,877,"1,625","1,625","1,625",1 Hit(s),+10.00%,+10.00%,0.265 Bars,312,0.22 Bars (+50% charged),7 Ki Blasts,3 Bar(s),1.26 Bars/s,+20.00%,0.00%,0.0300 Bars per hit,0.16 Bars/s,Between 0 - 2 Bars,0 Point(s),5 Point(s),4.20 Points/m,+10.00%,"Super Movement, High-Speed Movement"
151,Omega Shenron (GT),Almighty,8 DP,35 s,4.5 Bars,+4.00%,+4.00%,0.00%,507,878,"1,625","1,625","1,625",1 Hit(s),+30.00%,+30.00%,0.265 Bars,405,0.20 Bars (+50% charged),9 Ki Blasts,4 Bar(s),1.26 Bars/s,+10.00%,0.00%,0.0300 Bars per hit,0.18 Bars/s,Between 0 - 2 Bars,0 Point(s),6 Point(s),4.20 Points/m,+30.00%,"Super Movement, High-Speed Movement"
152,Spopovich,Power,2 DP,10 s,4.0 Bars,+5.00%,+5.00%,0.00%,409,708,"1,313","1,313","1,313",5 Hit(s),-15.00%,-15.00%,0.385 Bars,234,0.22 Bars (+50% charged),1 Ki Blasts,2 Bar(s),1.26 Bars/s,+20.00%,0.00%,0.0300 Bars per hit,0.16 Bars/s,Between 0 - 2 Bars,1 Point(s),4 Point(s),4.20 Points/m,-15.00%,
153,Beerus,God,10 DP,43 s,4.5 Bars,+14.50%,+14.50%,0.00%,565,978,"1,625","1,813","1,813",1 Hit(s),+40.00%,+40.00%,0.265 Bars,437,0.20 Bars (+50% charged),17 Ki Blasts,2 Bar(s),1.20 Bars/s,0.00%,0.00%,0.0300 Bars per hit,0.20 Bars/s,Between 0 - 2 Bars,0 Point(s),6 Point(s),3.36 Points/m,+40.00%,"Super Movement, High-Speed Movement"
154,Whis,God,10 DP,43 s,4.5 Bars,+14.50%,+14.50%,0.00%,565,978,"1,625","1,813","1,813",1 Hit(s),+40.00%,+40.00%,0.265 Bars,437,0.20 Bars (+50% charged),18 Ki Blasts,3 Bar(s),1.10 Bars/s,0.00%,0.00%,0.0300 Bars per hit,0.23 Bars/s,Between 0 - 2 Bars,0 Point(s),6 Point(s),3.36 Points/m,+40.00%,"Auto Dodge, Super Movement, High-Speed Movement"
155,Goku Black,Normal,5 DP,23 s,4.0 Bars,0.00%,0.00%,0.00%,409,708,"1,312","1,312","1,312",4 Hit(s),+5.00%,+5.00%,0.265 Bars,328,0.20 Bars (+50% charged),7 Ki Blasts,2 Bar(s),1.40 Bars/s,0.00%,0.00%,0.0300 Bars per hit,0.18 Bars/s,Between 0 - 2 Bars,0 Point(s),6 Point(s),4.20 Points/m,+5.00%,
156,"Goku Black, Super Saiyan Rosé",Super Saiyan,8 DP,35 s,4.0 Bars,0.00%,0.00%,0.00%,514,891,"1,625","1,625","1,625",1 Hit(s),+30.00%,+30.00%,0.265 Bars,411,0.20 Bars (+50% charged),9 Ki Blasts,2 Bar(s),1.76 Bars/s,0.00%,-2.80%,0.0270 Bars per hit,0.14 Bars/s,Between 0 - 2 Bars,0 Point(s),6 Point(s),4.20 Points/m,+30.00%,"Super Movement, High-Speed Movement"
157,Zamasu,Villain,5 DP,23 s,4.0 Bars,0.00%,0.00%,0.00%,409,708,"1,500","1,500","1,312",4 Hit(s),+22.50%,+22.50%,0.265 Bars,328,0.20 Bars (+50% charged),7 Ki Blasts,1 Bar(s),1.54 Bars/s,0.00%,-2.80%,0.0270 Bars per hit,0.16 Bars/s,Between 0 - 2 Bars,0 Point(s),5 Point(s),4.20 Points/m,+15.00%,
158,Fused Zamasu,Villain,8 DP,35 s,4.5 Bars,0.00%,0.00%,0.00%,468,810,"1,688","1,688","1,500",1 Hit(s),+37.50%,+37.50%,0.265 Bars,374,0.20 Bars (+50% charged),15 Ki Blasts,2 Bar(s),1.54 Bars/s,0.00%,-2.80%,0.0270 Bars per hit,0.16 Bars/s,Between 0 - 2 Bars,0 Point(s),5 Point(s),4.20 Points/m,+30.00%,"Super Movement, High-Speed Movement"
159,"Fused Zamasu, Half-Corrupted",Power,9 DP,39 s,4.5 Bars,+7.85%,+7.85%,0.00%,546,944,"1,750","1,750","1,750",1 Hit(s),+20.00%,+20.00%,0.385 Bars,343,0.22 Bars (+50% charged),16 Ki Blasts,3 Bar(s),1.44 Bars/s,+20.00%,0.00%,0.0300 Bars per hit,0.14 Bars/s,Between 0 - 2 Bars,0 Point(s),6 Point(s),4.20 Points/m,+20.00%,
160,Hit,Rival,8 DP,35 s,4.0 Bars,0.00%,0.00%,0.00%,507,810,"1,438","1,438","1,625",1 Hit(s),+30.00%,+20.00%,0.265 Bars,405,0.20 Bars (+50% charged),7 Ki Blasts,2 Bar(s),1.54 Bars/s,0.00%,0.00%,0.0300 Bars per hit,0.18 Bars/s,Between 0 - 2 Bars,0 Point(s),5 Point(s),4.20 Points/m,+30.00%,"Super Movement, High-Speed Movement"
161,Frost,Ki-Blast,6 DP,27 s,4.0 Bars,-5.00%,-5.00%,0.00%,390,675,"1,250","1,250","1,250",3 Hit(s),+10.00%,+10.00%,0.265 Bars,390,0.16 Bars (+50% charged),8 Ki Blasts,2 Bar(s),1.54 Bars/s,-10.00%,0.00%,0.0300 Bars per hit,0.19 Bars/s,Between 0 - 2 Bars,0 Point(s),6 Point(s),4.20 Points/m,+10.00%,Paralyze Ki-Blast
162,Cabba,Normal,5 DP,23 s,4.0 Bars,0.00%,0.00%,0.00%,409,708,"1,312","1,312","1,312",4 Hit(s),+5.00%,+5.00%,0.265 Bars,328,0.20 Bars (+50% charged),6 Ki Blasts,2 Bar(s),1.40 Bars/s,0.00%,0.00%,0.0300 Bars per hit,0.18 Bars/s,Between 0 - 2 Bars,0 Point(s),5 Point(s),4.20 Points/m,+5.00%,
163,"Cabba, Super Saiyan",Super Saiyan,6 DP,27 s,4.0 Bars,0.00%,0.00%,0.00%,475,823,"1,500","1,500","1,500",3 Hit(s),+20.00%,+20.00%,0.265 Bars,380,0.20 Bars (+50% charged),8 Ki Blasts,2 Bar(s),1.54 Bars/s,0.00%,-2.80%,0.0270 Bars per hit,0.16 Bars/s,Between 0 - 2 Bars,0 Point(s),5 Point(s),4.20 Points/m,+20.00%,
164,"Cabba, Super Saiyan 2",Super Saiyan,7 DP,31 s,4.0 Bars,0.00%,0.00%,0.00%,495,857,"1,562","1,562","1,562",1 Hit(s),+25.00%,+25.00%,0.265 Bars,396,0.20 Bars (+50% charged),9 Ki Blasts,2 Bar(s),1.54 Bars/s,0.00%,-2.80%,0.0270 Bars per hit,0.16 Bars/s,Between 0 - 2 Bars,0 Point(s),5 Point(s),4.20 Points/m,+25.00%,
165,Caulifla,Normal,5 DP,23 s,4.0 Bars,0.00%,0.00%,0.00%,409,708,"1,312","1,312","1,312",4 Hit(s),+5.00%,+5.00%,0.265 Bars,328,0.20 Bars (+50% charged),6 Ki Blasts,2 Bar(s),1.40 Bars/s,0.00%,0.00%,0.0300 Bars per hit,0.18 Bars/s,Between 0 - 2 Bars,0 Point(s),6 Point(s),4.20 Points/m,+5.00%,
166,"Caulifla, Super Saiyan 2",Super Saiyan,7 DP,31 s,4.0 Bars,0.00%,0.00%,0.00%,495,857,"1,562","1,562","1,562",1 Hit(s),+25.00%,+25.00%,0.265 Bars,396,0.20 Bars (+50% charged),8 Ki Blasts,2 Bar(s),1.54 Bars/s,0.00%,-2.80%,0.0270 Bars per hit,0.16 Bars/s,Between 0 - 2 Bars,0 Point(s),6 Point(s),4.20 Points/m,+25.00%,
167,Kale,Normal,5 DP,23 s,4.0 Bars,0.00%,0.00%,0.00%,409,708,"1,312","1,312","1,312",4 Hit(s),+5.00%,+5.00%,0.265 Bars,328,0.20 Bars (+50% charged),6 Ki Blasts,1 Bar(s),1.40 Bars/s,0.00%,0.00%,0.0300 Bars per hit,0.18 Bars/s,Between 0 - 2 Bars,0 Point(s),4 Point(s),4.20 Points/m,+5.00%,
168,"Kale, Super Saiyan (Berserk)",Legendary Super Saiyan,7 DP,31 s,4.5 Bars,-1.70%,-1.70%,+10.00%,585,"1,012","1,875","1,875","1,437",1 Hit(s),+20.00%,+20.00%,0.385 Bars,390,0.20 Bars (+50% charged),8 Ki Blasts,3 Bar(s),1.40 Bars/s,0.00%,0.00%,0.0300 Bars per hit,0.18 Bars/s,Between 0 - 2 Bars,0 Point(s),6 Point(s),4.20 Points/m,+25.00%,Super Armor
169,"Kale, Super Saiyan",Super Saiyan,6 DP,27 s,4.0 Bars,0.00%,0.00%,0.00%,475,823,"1,500","1,500","1,500",3 Hit(s),+20.00%,+20.00%,0.385 Bars,380,0.20 Bars (+50% charged),8 Ki Blasts,3 Bar(s),1.54 Bars/s,0.00%,-2.80%,0.0270 Bars per hit,0.16 Bars/s,Between 0 - 2 Bars,0 Point(s),6 Point(s),4.20 Points/m,+20.00%,
170,Kefla,Fusion,6 DP,27 s,5.0 Bars,+5.00%,+5.00%,0.00%,479,830,"1,500","1,500","1,500",3 Hit(s),+20.00%,+20.00%,0.265 Bars,384,0.22 Bars (+50% charged),10 Ki Blasts,2 Bar(s),1.54 Bars/s,+10.00%,-4.20%,0.0255 Bars per hit,0.15 Bars/s,Between 0 - 2 Bars,0 Point(s),5 Point(s),4.20 Points/m,+20.00%,
171,"Kefla, Super Saiyan",Fusion,7 DP,31 s,5.0 Bars,+5.00%,+5.00%,0.00%,499,864,"1,562","1,562","1,562",1 Hit(s),+25.00%,+25.00%,0.265 Bars,400,0.22 Bars (+50% charged),15 Ki Blasts,2 Bar(s),1.54 Bars/s,+10.00%,-4.20%,0.0255 Bars per hit,0.15 Bars/s,Between 0 - 2 Bars,0 Point(s),5 Point(s),4.20 Points/m,+25.00%,"Super Movement, High-Speed Movement"
172,"Kefla, Super Saiyan 2",Fusion,8 DP,35 s,5.0 Bars,+5.00%,+5.00%,0.00%,518,898,"1,625","1,625","1,625",1 Hit(s),+30.00%,+30.00%,0.265 Bars,415,0.22 Bars (+50% charged),20 Ki Blasts,2 Bar(s),1.54 Bars/s,+10.00%,-4.20%,0.0255 Bars per hit,0.15 Bars/s,Between 0 - 2 Bars,0 Point(s),6 Point(s),4.20 Points/m,+30.00%,"Super Movement, High-Speed Movement"
173,Jiren,Rival,8 DP,35 s,4.0 Bars,0.00%,0.00%,0.00%,507,810,"1,438","1,438","1,625",1 Hit(s),+30.00%,+20.00%,0.265 Bars,405,0.20 Bars (+50% charged),10 Ki Blasts,2 Bar(s),1.54 Bars/s,0.00%,0.00%,0.0300 Bars per hit,0.18 Bars/s,Between 0 - 2 Bars,0 Point(s),6 Point(s),4.20 Points/m,+30.00%,High-Speed Movement
174,"Jiren, Full Power",Almighty,9 DP,39 s,5.0 Bars,+3.00%,+3.00%,0.00%,526,911,"1,687","1,687","1,687",1 Hit(s),+35.00%,+35.00%,0.265 Bars,421,0.20 Bars (+50% charged),19 Ki Blasts,3 Bar(s),1.08 Bars/s,+10.00%,0.00%,0.0300 Bars per hit,0.20 Bars/s,Between 0 - 2 Bars,0 Point(s),6 Point(s),4.20 Points/m,+35.00%,"Super Aura, Super Movement, High-Speed Movement"
175,Toppo,Ki-Blast,7 DP,31 s,4.0 Bars,-5.00%,-5.00%,0.00%,409,709,"1,312","1,312","1,312",1 Hit(s),+15.00%,+15.00%,0.265 Bars,406,0.16 Bars (+50% charged),999 Ki Blasts,2 Bar(s),1.54 Bars/s,-10.00%,0.00%,0.0300 Bars per hit,0.19 Bars/s,Between 0 - 2 Bars,0 Point(s),5 Point(s),4.20 Points/m,+15.00%,
176,"Toppo, God of Destruction",God,8 DP,35 s,5.0 Bars,+14.50%,+14.50%,0.00%,526,911,"1,500","1,688","1,688",1 Hit(s),+30.00%,+30.00%,0.265 Bars,405,0.20 Bars (+50% charged),999 Ki Blasts,3 Bar(s),1.20 Bars/s,0.00%,0.00%,0.0300 Bars per hit,0.20 Bars/s,Between 0 - 2 Bars,0 Point(s),6 Point(s),3.36 Points/m,+30.00%,Super Aura
177,Dyspo,Speed,6 DP,27 s,4.0 Bars,-21.00%,-21.00%,0.00%,409,607,"1,250","1,250","1,250",3 Hit(s),+10.00%,+10.00%,0.075 Bars,343,0.21 Bars (+50% charged),6 Ki Blasts,1 Bar(s),1.40 Bars/s,0.00%,0.00%,0.0300 Bars per hit,0.18 Bars/s,Between 0 - 2 Bars,0 Point(s),6 Point(s),4.41 Points/m,+10.00%,"Super Movement, High-Speed Movement"
178,Bergamo,Normal,5 DP,23 s,4.0 Bars,0.00%,0.00%,0.00%,409,708,"1,312","1,312","1,312",4 Hit(s),+5.00%,+5.00%,0.265 Bars,328,0.20 Bars (+50% charged),7 Ki Blasts,2 Bar(s),1.40 Bars/s,0.00%,0.00%,0.0300 Bars per hit,0.18 Bars/s,Between 0 - 2 Bars,0 Point(s),5 Point(s),4.20 Points/m,+5.00%,
179,Ribrianne,Power,5 DP,23 s,4.0 Bars,+0.25%,+0.25%,0.00%,468,809,"1,500","1,500","1,500",4 Hit(s),0.00%,0.00%,0.385 Bars,281,0.22 Bars (+50% charged),7 Ki Blasts,2 Bar(s),1.26 Bars/s,+20.00%,0.00%,0.0300 Bars per hit,0.16 Bars/s,Between 0 - 2 Bars,0 Point(s),5 Point(s),4.20 Points/m,0.00%,Paralyze Ki-Blast
180,Kakunsa,Speed,5 DP,23 s,4.0 Bars,-21.00%,-21.00%,0.00%,390,573,"1,187","1,187","1,187",4 Hit(s),+5.00%,+5.00%,0.075 Bars,328,0.21 Bars (+50% charged),5 Ki Blasts,2 Bar(s),1.40 Bars/s,0.00%,0.00%,0.0300 Bars per hit,0.18 Bars/s,Between 0 - 2 Bars,0 Point(s),4 Point(s),4.41 Points/m,+5.00%,"Super Movement, High-Speed Movement"
181,Roasie,Ki-Blast,5 DP,23 s,4.0 Bars,-15.50%,-15.50%,0.00%,370,641,"1,187","1,187","1,187",4 Hit(s),+5.00%,+5.00%,0.265 Bars,375,0.16 Bars (+50% charged),15 Ki Blasts,1 Bar(s),1.54 Bars/s,-10.00%,0.00%,0.0300 Bars per hit,0.19 Bars/s,Between 0 - 2 Bars,0 Point(s),4 Point(s),4.20 Points/m,+5.00%,
182,Anilaza,Giant,8 DP,35 s,5.0 Bars,+34.90%,-2.30%,+10.00%,735,"2,498","4,625","1,688","1,500",1 Hit(s),+30.00%,+30.00%,0.515 Bars,515,0.20 Bars (+50% charged),4 Ki Blasts,3 Bar(s),1.40 Bars/s,0.00%,0.00%,0.0315 Bars per hit,0.18 Bars/s,Between 0 - 2 Bars,0 Point(s),5 Point(s),4.20 Points/m,+20.00%,Super Armor`

const csvSkilSrc = `ID,Characters,Rush Chain 1,Rush Chain 2,Rush Chain 3,Rush Chain 4,"(Vertical Skill)
Skill 1","(Horizontal Skill)
Skill 2",Blast 1,Blast 2,Ultimate Blaste,Vague Codes,Specific Codes
1,Goku (Z Early),Heavy Finish,Ki Blast Cannon,Flying Kicks,Heavy Finish,Solar Flare,Kioken,Kamehameha,Kioken Attack,Spirit Bomb,,
2,Goku (Z Mid),Heavy Finish,Ki Blast Cannon,Flying Kicks,Heavy Finish,I Can't Wait,Give me your Energy,x20 Kamehameha,Kioken Rush,Spirit Bomb,,
3,Goku (Z Mid) Super Sayian,Flying Kicks,Heavy Finish,Rolling Hammer,Ki Strike,Wild Sense,Now I'm Angry,Super Kamehameha,Meteor Blast,Angry Kamehameha,,
4,Goku (Z End),Heavy Finish,Ki Blast Cannon,Flying Kicks,Heavy Finish,Instant Transmission,Wild Sense,Kamehameha,Meteor Smash,Super Spirit Bomb,,
5,Goku (Z End) Super Sayian,Flying Kicks,Heavy Finish ,Rolling Hammer,Heavy Finish,Wild Sense,Sayian Spirit,Super Kamehameha,Super Energy Wave Combo,Instant Transmission Kamehameha,,
6,Goku (Z End) Super Sayian 2,Ki Blast Cannon,Heavy Finish ,Rolling Hammer,Heavy Finish,Instant Transmission,Full Power,Instant Transmission Kamehameha,Meteor Crash,Super Kamehameha,,
7,Goku (Z End) Super Sayian 3,Ki Blast Cannon,Flying Kicks,Heavy Finish,Rolling Hammer,Instant Transmission,Power Up to the Very Limit,Super Kamehameha,Super Dragon Twin Fists,Dragon Fist,,
8,Goku (Super),Heavy Finish,Ki Blast Cannon,Flying Kicks,Heavy Finish,Instant Transmission,All Fired Up,Super Kamehameha,Dragon Burst,Super Spirit Bomb,,
9,Goku (Super) God,Ki Blast Cannon,Flying Kicks,Rolling Hammer,Heavy Finish,God Bind,Shenron Aura,God Kamehameha,God Impact,God Burst,,
10,Goku (Super) Super Sayian,Flying Kicks,Heavy Finish,Rolling Hammer,Ki Blast Cannon,Wild Sense,All-Encompassing Power,Super Kamehameha,Dragon Blast,Sonic Blast,,
11,Goku (Super) Super Sayian God,Flying Kicks,Rolling Hammer,Heavy Finish,Ki Blast Cannon,God Bind,Shenron Aura,God Kamehameha,God Impact,God Burst Kamehameha,,
12,Goku (Super) Ultra Instinct Sign,Heavy Finish,Ki Blast Cannon ,Flying Kicks,Heavy Finish,Even Greater Potential,You'll Never Beat Me,Kamehameha -Sign-,Flash -Sign-,Point-Blank Kamehameha,,
13,Goku (Super) Ultra Instinct,Flying Kicks,Heavy Finish ,Rolling Hammer,Ki Blast Cannon ,Ultra Movement,No Backing Down,Ultra Kamehameha,Ultra Barrage,Supreme Kamehameha,,
14,Goku (GT),Flying Kicks,Blaster Wave,Heavy Finish,Flying Kicks,Solar Flare,Afterimage Strike,Kamehameha,Dragon Fist,Spirit Bomb,,
15,Goku (GT) Super Sayian,Flying Kicks,Blaster Wave,Heavy Finish,Flying Kicks,Wild Sense,Full Power,Super Kamehameha,Full-Power Energy Blast Volley,Super Explosive wave,,
16,Goku (GT) Super Sayian 3,Rolling Hammer,Blaster Wave,Heavy Finish,Flying Kicks,Sayian Spirit,High-Tension,Super Kamehameha,Full-Power Energy Blast Volley,Dragon Fist,,
17,Goku (GT) Super Sayian 4,Flying Kicks,Rolling Hammer,Heavy Finish,Ki Blast Cannon,Instant Transmission,All I Need Is Five Seconds!,x10 Kamehameha,Meteor Crash,Dragon Fist,,
18,Goku (Teen),Flying Kicks,Flying Kicks,Heavy Finish,Flying Kicks,Afterimage Strike,False Courage ,Kamehameha,Commencing Counterattack!,Supreme Kamehameha,,
19,Goku (Mini),Flying Kicks,Heavy Finish,Heavy Finish,Flying Kicks,Sleep,Warm-up Exercise,Quick Rush,Take This!,Power Pole Rush,,
20,Vegeta (Z) Scouter,Heavy Finish,Flying Kicks,Ki Wave,Heavy Finish,Explosive Wave,Sayian Spirit,Galick Gun,Final Galick Cannon,Dirty Fireworks,,
21,Great Ape Vegeta,N/A,N/A,N/A,N/A,Explosive Wave ,Howl,Chou Makouhou,Chou Makouhou Barrage,Super Galick Gun,,
22,Vegeta (Z Early) ,Blaster Wave,Ki Wave,Flying Kicks,Heavy Finish,Explosive Wave,Full Power,Galick Gun,Super Energy Wave Combo,Super Explosive Wave,,
23,Vegeta (Z Early) Super Sayian,Ki Blast Cannon,Heavy Finish,Flying Kicks,Ki Wave,Explosive Wave,Awakened by Anger,Maximum Flasher,Cosmic Impact ,Big Bang Attack,,
24,Super Vegeta,Blaster Wave,Rolling Hammer,Ki Wave,Heavy Finish,Explosive Wave,I am Super Vegeta!,Big Bang Attack,Spirit Breaking Cannon,Final Flash,,
25,Vegeta (Z End),Heavy Finish,Ki Wave,Ki Blast Cannon,Heavy Finish,Afterimage,Sayian Spirit,Double Galick Cannon,Infinite Blaster,Big Bang Attack,,
26,Vegeta (Z End) Super Sayian,Flying Kicks,Heavy Finish,Ki Wave,Ki Blast Cannon,Explosive Wave,Sayian Spirit,Final Flash ,Infinite Blaster,Cosmic Circle,,
27,Vegeta (Z End) Super Sayian 2,Flying Kicks,Rolling Hammer,Ki Wave,Heavy Finish,Explosive Wave,Wild Sense,Big Bang Attack,Infinite Blaster,Infinity Flasher,,
28,Majin Vegeta,Heavy Finish,Heavy Finish,Ki Blast Cannon,Ki Wave,Prince's Pride,Majin's Awakening,Final Impact,Big Bang Attack,Final Explosion,,
29,Vegeta (Super),Ki Blast Cannon,Heavy Finish,Flying Kicks,Ki Wave,Explosive Wave,All Warmed Up,Galick Gun,Absolute,Final Flash,,
30,Vegeta (Super) God,Flying Kicks,Heavy Finish,Ki Wave,Ki Blast Cannon,Explosive Wave,Sayian Spirit,God Shine Attack,Gamma Fist,Prominence Flash,,
31,Vegeta (Super) Super Sayian,Heavy Finish,Ki Wave,Ki Blast Cannon,Heavy Finish,Sayian Spirit,I'll Get You For This...,Galick Rush,Galick Uppercut,Final Galick Blast,,
32,Vegeta (Super) Super Sayian God,Flying Kicks,Heavy Finish,Ki Wave,Heavy Finish,I'm No Pushover!,Limits?! I Break Them!,God Final Flash,Gamma Burst Flash,Final God Explosion,,
33,Vegeta (GT) Super Sayian 4,Ki Wave,Rolling Hammer,Ki Blast Cannon,Heavy Finish,Explosive Wave,Final Sign ,Final Flash ,Spirit Breaking Cannon,Final Shine Attack,,
34,Gohan (Kid),Flying Kicks      ,Ki Blast Cannon,Heavy Finish ,Flying Kicks,Super Unyielding Spirit,Afterimage Strike,Masenko,Energy Blast Barrage,Wild Rush Blaster,,
35,Gohan (Teen),Flying Kicks      ,Ki Blast Cannon,Heavy Finish ,Flying Kicks,Wild Sense,Full-Power Charge,Super Masenko,Energy Blast Barrage,Super Kamehameha,,
36,Gohan (Teen) Super Sayian,Flying Kicks      ,Ki Blast Cannon ,Heavy Finish ,Flying Kicks,Explosive Wave,Full Power,Super Kamehameha,Super Assault Combo,Raging Masenko,,
37,Gohan (Teen) Super Sayian 2,Heavy Finish      ,Ki Blast Cannon ,Flying Kicks,Rolling Hammer ,Explosive Wave,Unforgiveable,Super Kamehameha,Explosive Rush,Father-Son Kamehameha,,
38,Gohan (Adult),Flying Kicks      ,Heavy Finish ,Ki Blast Cannon,Heavy Finish ,Wild Sense,Full-Power Charge,Explosive Cannon,Explosive Flash Strike,Super Kamehameha,,
39,Gohan (Adult) Super Sayian,Flying Kicks      ,Heavy Finish ,Ki Blast Cannon ,Heavy Finish ,Explosive Wave,Full-Power Charge,Explosive Cannon,Full-Power Energy Blast Volley,Bros. Kamehameha,,
40,Gohan (Adult) Super Sayian 2,Flying Kicks      ,Rolling Hammer ,Ki Blast Cannon,Heavy Finish,Explosive Wave,Full Power, Super Explosive Cannon,Super Explosive Flash Strike,Super Kamehameha,,
41,Great Saiyaman,Flying Kicks,Rolling Hammer,Heavy Finish,Ki Blast Cannon,Justice Pose,Justice Finishing Pose, Justice Bomber,Justice Rush,Justice Judgment,,
42,Ultimate Gohan,Flying Kicks,Ki Blast Cannon,Rolling Hammer,Heavy Finish,Wild Sense,Power Up to the Very Limit,Super Kamehameha,Fierce Combination,Burst Rush,,
43,Gohan (Future),Flying Kicks      ,Heavy Finish ,Ki Blast Cannon,Rolling Hammer,Wild Sense,Full-Power Charge,Masenko,Super Destructive Wave,Super Kamehameha,,
44,Gohan (Future) Super Sayian,Flying Kicks      ,Heavy Finish,Rolling Hammer,Ki Wave,Evil Barrier ,Power Up to the Very Limit,Hyper Masenko,Special Beam Cannon ,Fierce Combination,,
45,Piccolo,Ki Blast Cannon,Ki Wave,Heavy Finish,Flying Kicks,Paralyze Beam,All-Out,Explosive Demon Wave,Explosive Breath Cannon,Special Beam Cannon,,
46,Piccolo Fused with Kami,Ki Blast Cannon ,Flying Kicks,Heavy Finish ,Rolling Hammer ,Wild Sense,False Courage ,Special Beam Cannon,Light Grenade,Hellzone Grenade,,
47,Nail,Ki Blast Cannon,Flying Kicks,Heavy Finish ,Ki Wave,Buying time,Full Power,Full-Power Energy Wave,Super Destructive Wave,Mystic Flasher,,
48,Krillin,Flying Kicks,Flying Kicks,Ki Blast Cannon ,Heavy Finish ,Solar Flare,Afterimage Strike,Kamehameha,Spread Energy Wave,Chain Destructo Disc,,
49,Yamcha,Heavy Finish,Ki Blast Cannon,Flying Kicks ,Rolling Hammer,Afterimage,Power Up to the Very Limit,Kamehameha,Wolf Fang Fist,Spirit Ball,,
50,Tien,Ki Blast Cannon,Flying Kicks,Heavy Finish,Heavy Finish,Solar Flare,Wild Sense,Dodon Ray,Tri-Beam,Neo Tri-Beam,,
51,Trunks (Sword),Flying Kicks,Ki Blast Cannon,Heavy Finish,Heavy Finish,Afterimage,Power Up to the Very Limit,Finish Buster,Burning Storm,Lighting Sword Attack,,
52,Trunks (Sword) Super Sayian,Flying Kicks,Heavy Finish,Ki Blast Cannon,Heavy Finish,Explosive Wave,Burning Heart,Burning Attack,Burning Storm,Shining Sword Attack,,
53,Trunks (Melee),Heavy Finish,Blaster Wave,Heavy Finish,Flying Kicks,Explosive Wave,Wild Sense,Burning Attack,High Speed Rush,Finish Buster,,
54,Trunks (Melee)Super Sayian,Flying Kicks,Heavy Finish,Blaster Wave,Heavy Finish,Explosive Wave,Finish Sign,Burning Attack,Burning Breaker,Heat Dome Attack,,
55,Super Trunks,Heavy Finish,Rolling Hammer,Blaster Wave,Heavy Finish,Explosive Wave,Inexperienced Power Up,Finish Buster,Burning Attack,Super Explosive Wave,,
56,Future Trunks,Flying Kicks      ,Ki Blast Cannon ,Heavy Finish ,Heavy Finish ,Solar Flare,Wild Sense,Masenko,Lightning Sword Slash,Shining Slash,,
57,Future Trunks Super Sayian,Flying Kicks      ,Heavy Finish ,Ki Wave,Heavy Finish ,Explosive Wave,Power Up to the Very Limit,Galick Gun,Final Flash,Final Hope Slash,,
58,Trunks (Kid),Flying Kicks,Heavy Finish,Heavy Finish,Ki Blast Cannon,Afterimage,Finish Sign,Full-Power Energy Wave,High Speed Rush,Finish Buster,,
59,Trunks (Kid) Super Sayian,Flying Kicks,Heavy Finish,Ki Blast Cannon,Heavy Finish,Explosive Wave,Super Unyielding Spirit,Full-Power Energy Wave,High Speed Rush,Victory Cannon,,
60,Gotanks,Flying Kicks ,Flying Kicks,Ki Blast Cannon,Heavy Finish,Afterimage,Ta-dah!,Full-Power Energy Wave,High Speed Rush,Victory Cannon,,
61,Gotanks Super Sayian,Flying Kicks ,Ki Blast Cannon,Heavy Finish ,Flying Kicks,False Corage,High-Tension,Victory Cannon, Galactic Donuts,Super Ghost Kamikaze Attack,,
62,Vegito,Heavy Finish,Rolling Hammer,Ki Blast Cannon,Heavy Finish,Explosive Wave,High-Tension,Big Bang Cannon,Rampaging Rush,Super Kamehameha,,
63,Super Vegito,Ki Wave,Rolling Hammer,Ki Blast Cannon,Heavy Finish,Afterimage Strike,Finish Sign,Big Bang Attack,Final Kamehameha,Beam Sword Slash,,
64,Vegito Super Sayian God,Ki Wave,Rolling Hammer,Ki Blast Cannon,Heavy Finish,Settling the Score,Full-Power Charge,God Kamehameha,Omega Finishing Blow,God Final Kamehameha,,
65,Super Gogeta (Z),Flying Kicks,Heavy Finish,Ki Blast Cannon,Rolling Hammer,Immovable Stance,I'm the One Who Will Defeat You!,Big Bang Kamehameha,Punisher Drive,Stardust Breaker,,
66,Gogeta (Super),Blaster Wave         ,Heavy Finish ,Rolling Hammer ,Flying Kicks ,Wild Sense,Here We Go!,Super Kamehameha,Super Explosive Wave,Big Bang Kamehameha,,
67,Gogeta (Super) Super Sayian,Heavy Finish       ,Blaster Wave,Rolling Hammer ,Flying Kicks ,Instant Transmission ,Finish Sign,Super Kamehameha,Rising Vortex,Stardust Fall,,
68,Gogeta (Super) Super Sayian God,Blaster Wave         ,Heavy Finish ,Rolling Hammer ,Flying Kicks,Instant Transmission ,Stardust Barrier ,Stardust Blaster,Meteor Explosion,Ultimate Kamehameha,,
69,Gogeta (GT) Super Sayian 4,Flying Kicks      ,Heavy Finish ,Ki Blast Cannon,Rolling Hammer ,Wild Sense,Power Up to the Very Limit,Big Bang Kamehameha,Ultimate Impact,Ultra Big Bang Kamehameha,,
70,Gotanks Super Sayian 3,Ki Blast Cannon    ,Heavy Finish,Ki Wave ,Flying Kicks,Vice Shout,Finish Sign,Victory Bazooka,DIE DIE Missile Barrage,Charging Ultra Buu Buu Volleyball,,
71,Goten,Flying Kicks ,Ki Blast Cannon,Heavy Finish ,Flying Kicks,Afterimage,Sleep,Boulder Toss Barrage,Charge!,Super Kamehameha,,
72,Goten Super Sayian,Flying Kicks ,Ki Blast Cannon,Heavy Finish ,Flying Kicks,Wild Sense,False Courage ,Kamehameha,Charge!,Double Kamehameha,,
73,Videl,Flying Kicks,Rolling Hammer,Ki Blast Cannon,Heavy Finish,Afterimage Strike,Super Unyielding Spirit,Videl Kick,Desperado Rush,Videl Rush,,
74,Master Roshi,Flying Kicks,Flying Kicks,Ki Blast Cannon,Heavy Finish,Afterimage Strike,False Courage ,Orginal Kamehameha,Thunder Shocl Surprise,Evil Containment Wave,,
75,Master Roshi (Max Power),Heavy Finish,Rolling Hammer,Heavy Finish,Rolling Hammer,False Courage,Pump Up,Orginal Kamehameha,Turtle School Ultimate Fist,Max Power Kamehameha,,
76,Frieza (Z) 1st Form,Flying Kicks     ,Heavy Finish ,Ki Blast Cannon ,Heavy Finish ,Psychokinesis,Pump Up,Death Beam,Punishing Rush,Death Ball,,
77,Frieza (Z) 2nd Form,Heavy Finish      ,Blaster Wave,Rolling Hammer,Heavy Finish ,Explosive Wave,Finish Sign,Punishing Blaster,Death Storm,HAIL Frieza,,
78,Frieza (Z) 3rd Form,Flying Kicks     ,Ki Blast Cannon,Heavy Finish,Flying Kicks,Explosive Wave,High-Tension,Barrage Death Beam,High Speed Rush,Crazy Finger Beam,,
79,Frieza (Z) 4th Form,Heavy Finish      ,Ki Blast Cannon,Flying Kicks,Heavy Finish ,Psychokinesis,Your Arrogance Disgusts Me!,Barrage Death Beam,You Might Die This Time ,I'll Destroy This Planet!,,
80,Frieza (Z) Full Power,Heavy Finish      ,Rolling Hammer ,Blaster Wave,Heavy Finish ,Psychokinesis,Long Awaited-for 100%,Death Saucer,Nova Strike,I'm the One Who'll Kill You!,,
81,Mecha Frieza,Flying Kicks,Heavy Finish ,Flying Kicks,Heavy Finish,Psychokinesis,Finish Sign,Death Beam,Fissure Slash,Supernova,,
82,Frieza (Super),Flying Kicks     ,Heavy Finish ,Ki Blast Cannon,Rolling Hammer,Psychokinesis,Power of Revenge,Death Beam,Super Nova Strike,Super Death Ball,,
83,Golden Frieza,Blaster Wave    ,Flying Kicks,Rolling Hammer ,Heavy Finish ,Wild Sense,True Golden Frieza,Great Death Beam,"""No Hard feelings"" Hit",Earth Breaker,,
84,Cell 1st Form,Blaster Wave        ,Flying Kicks,Heavy Finish,Heavy Finish,Solar Flare,Afterimage,Kamehameha,Special Beam Cannon ,Drain Life Cell,,
85,Cell 2nd Form,Heavy Finish     ,Heavy Finish,Blaster Wave,Rolling Hammer,Solar Flare,Pump Up,Big Bang Crash,Drain Life Cell,Unforgiveable!,,
86,Cell Perfect Form,Flying Kicks     ,Ki Blast Cannon,Heavy Finish,Heavy Finish,Explosive Wave,Afterimage,Super Kamehameha,Barrage Death Beam,Perfect Barrier ,,
87,Perfect Cell,Flying Kicks,Heavy Finish,Ki Blast Cannon,Rolling Hammer ,Instant Transmission,Wild Sense,Perfect Beam,Perfect Rush,Solar Kamehameha,,
88,Cell Jr,Flying Kicks     ,Flying Kicks,Ki Blast Cannon,Heavy Finish,Solar Flare,Explosive Wave,Special Beam Cannon,Innocence Rush,Super Kamehameha,,
89,Majin Buu,Heavy Finish ,Rolling Hammer,Ki Blast Cannon ,Heavy Finish ,Paralysis Beam,Sleep,Buu Buu Gum,Super Kamehameha,Angry Explosion,,
90,Majin Buu (Evil),Heavy Finish ,Ki Blast Cannon,Ki Wave,Flying Kicks,Paralysis Beam,Mystic Breath ,Super Kamehameha,Flame Shower Breath,Guilty Flash,,
91,Super Buu,Heavy Finish,Ki Blast Cannon,Flying Kicks,Rolling Hammer,Vice Shout,Regeneration,Assault Rain,Majin Beam,Revenge Death Bomber,,
92,Super Buu Gotanks Absorbed,Ki Blast Cannon,Ki Blast Cannon,Flying Kicks,Heavy Finish,Explosive Wave,Regeneration,Galatic Donut Volley,Special Beam Cannon ,Super Kamehameha,,
93,Super Buu Gohan Absorbed,Heavy Finish,Flying Kicks,Heavy Finish,Rolling Hammer,Afterimage,High-Tension,Super Kamehameha,Majin Beam,Super Ghost Buu Attack,,
94,Kid Buu,Flying Kicks ,Flying Kicks,Ki Blast Cannon,Heavy Finish ,Instant Transmission,Sleep,Super Kamehameha,Mystic Combination,Planet Burst,,
95,Mr Satan,Heavy Finish,Push,Heavy Finish,Heavy Finish,False Courage,Royal Raiment?!,Dynomite Kick,Present Bomb,Mr. Buu Arrives,,
96,Chiaotzu,Flying Kicks     ,Flying Kicks,Flying Kicks,Heavy Finish,Telekinesis,Afterimage,Dodon Ray,Psychic Rock Throw,"Farewell, Mr. Tien",,
97,Yajirobi,Heavy Finish,Heavy Finish,Heavy Finish,Rolling Hammer,Super Unyielding Spirit,Senzu Beans,Ka-blam Attack,Flash and Kill,Miracle Ka-Blam Smash,,
98,Pan (GT),Flying Kicks,Heavy Finish ,Flying Kicks ,Flying Kicks,Afterimage Strike,Saiyan Spirit,Kamehameha,Giru Missile,Maiden's Rage,,
99,Uub (GT),Flying Kicks,Ki Blast Cannon,Flying Kicks,Heavy Finish,Wild Sense,Power Up to the Very Limit,Super Kamehameha,Blazing Barrage Palm,Super Explosive Wave,,
100,Majuub (GT),Flying Kicks,Ki Blast Cannon,Heavy Crush,Heavy Crush,Paralyze Beam,Mystic Breath ,Super Consecutive Energy Blast,Majin Beam,Lightning Arrow,,
101,Bardock,Ki Blast Cannon        ,Heavy Finish,Rolling Hammer,Flying Kicks,Shockwave of Rebellion,Saiyan Spirit,Riot Blaster,Final Revenger,Final Spirit Cannon,,
102,Radditz,Flying Kicks,Heavy Finish,Blaster Wave,Rolling Hammer,Saiyan Spirit,Full Power,Energy Crash,Sonic Assault,Begone!,,
103,Saibaman,Blaster Wave,Flying Kicks,Flying Kicks,Heavy Finish,Acid,Afterimage,Full-Power Energy Wave,High Speed Rush,Saibaman Bomb,,
104,Nappa,Heavy Finish,Rolling Hammer,Blaster Wave,Heavy Finish,Sayian Spirit,Pump up,Volcanic Explosion,Blazing Storm,Nappa Cannon,,
105,Zarbon,Heavy Finish,Ki Blast Cannon,Flying Kicks,Heavy Finish,Wild Sense,Full Power,Shooting Star Arrow,Bloody Dance,Elegant Blaster,,
106,Super Zarbon ,Heavy Finish,Heavy Finish,Blaster Wave,Rolling Hammer,False Corage,High-Tension,Elegant Blaster,Wild Pressure,Monster Crush,,
107,Dodoria,Blaster Wave        ,Rolling Hammer,Rolling Hammer,Heavy Finish,False Courage,Pump Up,Chou Makouhou,Dodoria Head Ram,Maximum Buster,,
108,Cui,Blaster Wave        ,Heavy Finish,Flying Kicks,Heavy Finish,False Courage,Sleep,Full-Power Energy Wave,Full-Power Energy Wave Combo,Ah! Lord Frieza!,,
109,Captain Ginyu,Heavy Finish     ,Heavy Finish,Ki Blast Cannon,Rolling Hammer,SP Fighting Pose 5,Dangerous Shock,Full-Power Energy Wave,Galaxy Dynamite,Body Change,,
110,Recoome,Blaster Wave,Heavy Finish,Rolling Hammer ,Heavy Finish,False Courage,SP Fighting Pose 1,Recoome Eraser Gun,Recoome Grenade Bomber,Recoome Fighting Bomber,,
111,Burter,Heavy Finish     ,Flying Kicks,Ki Blast Cannon,Rolling Hammer,Afterimage,SP Fighting Pose 2,Full-Power Energy Ball,Space Mach Attack,Purple Comet Attack,,
112,Jeice,Rolling Hammer,Flying Kicks,Ki Blast Cannon,Heavy Finish,Explosive Wave,SP Fighting Pose 3,Full-Power Energy Wave,Crusher Ball,Purple Comet Attack,,
113,Guldo,Flying Kicks,Rolling Hammer,Heavy Finish ,Ki Blast Cannon,Paralysis,SP Fighting Pose 4,Psychic Rock Throw,Full-Power Energy Blast Volley,Guldo Special,,
114,King Cold,Heavy Finish ,Ki Blast Cannon ,Rolling Hammer ,Rolling Hammer ,Explosive Wave,King's Dignity,Full-Power Death Beam,Super Explosive Wave,Power of the Cold Clan,,
115,Android 16,Heavy Finish      ,Rolling Hammer,Blaster Wave,Rolling Hammer,Explosive Wave,Pump Up,Hell's Impact,Hell Flash,Self Destruct Device,,
116,Android 17 (Z),Heavy Finish      ,Flying Kicks,Heavy Finish,Rolling Hammer,Android Barrier ,Time To Get Serious,High Power Blitz ,Super Electric Strike,Barrier Explosion,,
117,Android 17 (Super),Rolling Hammer   ,Heavy Finish,Heavy Finish,Flying Kicks,Andrioid Barrier ,Finish Sign,Full-Power Energy Ball,Photon Flash,Sadistic Dance,,
118,Android 18,Heavy Finish      ,Heavy Finish,Flying Kicks,Rolling Hammer,Android Barrier ,Super Unyielding Spirit,Infinity Bullet,Energy Wave,Sadistic 18,,
119,Android 19,Heavy Finish      ,Rolling Hammer,Heavy Finish,Rolling Hammer,False Courage,Pump Up,Full-Power Energy Wave,High Power Rush,Drain Life 19,,
120,Dr. Gero,Flying Kicks     ,Flying Kicks,Heavy Finish,Heavy Finish,False Courage,Finish Sign,Full-Power Energy Wave,Bionic Punisher,Drain Life 20,,
121,Babidi,Flying Kicks      ,Ki Blast Cannon,Ki Blast Cannon,Ki Wave,Demon Eye ,Wizard Barrier,Pui Pui Nice Shot,Ultimate Explosive Power,Super Electroshock Sorcery,,
122,Dabura,Heavy Finish     ,Rolling Hammer,Ki Blast Cannon ,Ki Wave,Evil Breath ,Afterimage Strike,Evil Impulse,Evil Flame,Dark Sword Strike,,
123,Frieza Force Soldier,Heavy Finish     ,Flying Kicks,Heavy Finish,Flying Kicks,Full-Power Charge,Sleep,Energy Wave,Full-Power Energy Wave ,Life-Risking Blow!,,
124,Broly (Z),Flying Kicks     ,Ki Blast Cannon,Ki Wave ,Heavy Finish,Wild Sense,Kakarottt!,Full-Power Energy Wave,High Speed Rush,Super Explosive Wave,,
125,Broly (Z) Super Sayian,Heavy Finish     ,Rolling Hammer,Blaster Wave,Flying Kicks,Saiyan Spirit,Kakarottt!,Bloody Smash,Trap Shooter,Eraser Cannon,,
126,Broly (Z) Legendary Super Sayian,Heavy Finish     ,Rolling Hammer,Blaster Wave,Ki Wave,Explosive Wave,Kakarottt!,Eraser Cannon,Gigantic Hammer,Omega Blaster,,
127,Broly (Super),Heavy Finish     ,Rolling Hammer,Ki Wave ,Heavy Finish,Full-Power Charge,Going Berserk,Full-Power Energy Wave,Gigantic Crash,Gigantic Impact,,
128,Broly (Super) Super Sayian,Heavy Finish     ,Ki Blast Cannon,Rolling Hammer,Heavy Finish,Saiyan Spirit,Howl,Gigantic Cannon,Gigantic Rage,Gigantic Ball,,
129,Broly (Super) Super Sayian Full Power,Heavy Finish     ,Rolling Hammer,Blaster Wave,Rolling Hammer,Wild Move,Untamed Instinct,Gigantic Cannon,Blaster Meteor,Gigantic Catastrophe,,
130,Super Garlic Jr,Heavy Finish,Rolling Hammer,Rolling Hammer,Ki Blast Cannon,Sealing Paralyze Beam,Makyo Star,Death Impact,Darkness Illusion,Dead Zone,,
131,Dr. Wheelo,N/A           ,N/A,N/A,N/A,Barrier,Full Power,Photon Strike,Gigantic bomber,Planet Geyser,,
132,Turles,Heavy Finish,Blaster Wave,Heavy Finish,Heavy Finish,Explosive Wave,Fruit of the Tree of Might,Kill Driver,Full-Power Energy Wave Combo,Meteor Burst,,
133,Lord Slug,Heavy Finish ,Heavy Finish ,Ki Blast Cannon ,Rolling Hammer,Explosive Wave,High-Tension,Finger Beam,Darkness Eye Beam,Power of Darkness,,
134,Lord Slug Giant Form,N/A,N/A,N/A,N/A,Explosive Wave,Pump Up,Darkness Eye Beam,Super Explosive Wave,Darkness Blaster,,
135,Cooler,Flying Kicks     ,Heavy Finish,Flying Kicks,Ki Wave ,Psychokinesis,Afterimage,Full-Power Energy Wave,Darkness Eye Beam,Death Ball,,
136,Cooler Final Form,Flying Kicks     ,Rolling Hammer,Ki Blast Cannon,Heavy Finish,Psychokinesis,Psycho Barrier,Death Beam ,Death Chaser,Supernova,,
137,Metal Cooler,Heavy Finish,Flying Kicks,Ki Wave,Rolling Hammer,Instant Transmission,Regeneration,Lock-On Buster,Finger Blitz Barrage,Supernova,,
138,Android 13,Flying Kicks      ,Heavy Finish,Flying Kicks,Heavy Finish,Wild Sense,High-Tension,Full-Power Energy Wave,Silent Assassin 13,S.S. Deadly Bomber,,
139,Fusion Android 13 ,Heavy Finish       ,Rolling Hammer ,Rolling Hammer ,Heavy Finish ,Andrioid Barrier ,Pump Up,S.S. Deadly Bomber,Super Explosive Wave,S.S. Deadly Hammer,,
140,Bojack,Blaster Wave        ,Heavy Finish,Rolling Hammer,Heavy Finish,Pyscho Barrier ,Full Power,Full-Power Energy Ball,Trap Shooter,Grand Smasher,,
141,Full Power Bojack,Blaster Wave        ,Rolling Hammer ,Heavy Finish,Heavy Finish,Psycho Barrier ,Pump Up,Grand Smasher,Galactic Tyrant,Galactic Buster,,
142,Janemba,N/A,N/A,N/A,N/A,Mystic Breath,Howl,Chou Makouhou,Rapid Cannon,Illusion Smash,,
143,Super Janemba,Rolling Hammer,Flying Kicks,Ki Wave,Heavy Finish,Mystic Breath,Dimension Shift,Evil Cannon,Lightning Shower Rain,Dimension Sword Attack,,
144,Tapion,Heavy Finish,Flying Kicks,Ki Blast Cannon,Rolling Hammer,Hero's Flute,Afterimage,Brave Cannon,Brave Slash,Brave Sword Attack,,
145,Hirudegarn,N/A,N/A,N/A,N/A,Explosive Wave,Dark Eyes,Chou Makousen,Super Explosive Wave,Gigantic Flame,,
146,Baby Vegeta (GT),Flying Kicks      ,Ki Blast Cannon,Ki Wave,Heavy Finish,Explosive Wave,High-Tension,Galick Gun,Finger Blitz Barrage,Final Flash,,
147,Super Baby 1  (GT),Flying Kicks,Ki Wave,Ki Blast Cannon ,Heavy Finish,Afterimage,High-Tension,Galick Gun,Tuffle Revenger,Final Flash,,
148,Super Baby 2  (GT),Flying Kicks,Heavy Finish,Rolling Hammer,Ki Wave,Explosive Wave,Full Power,Final Flash,Revenge Cutter,Revenge Death Ball Final,,
149,Great Ape Baby (GT),N/A,N/A,N/A,N/A,Explosive Wave,Howl,Super Galick Gun,Gigantic Flame,Revenge Death Ball Final,,
150,Syn Shenron (GT),Heavy Finish,Blaster Wave,Ki Wave,Heavy Finish,Explosive Wave,Mysitc Breath,Trap Shooter,Blazing Storm,Gigantic Blaze,,
151,Omega Shenron (GT),Heavy Finish,Rolling Hammer,Blaster Wave,Ki Wave,Wild Sense,Power Up to the Very Limit,Gigantic Blaze,Dragon Thunder,Minus Energy Power Ball,,
152,Spopovich,Heavy Finish,Ki Blast Cannon,Rolling Hammer,Heavy Finish,A Servant's Latent Power,Berserker,Beserker Crash,Mad Banquet,Majin Buu Resurrection,,
153,Beerus,Ki Blast Cannon        ,Rolling Hammer,Heavy Finish,Flying Kicks,Sleep,Verdict of Destruction,Sphere of Destruction,Hakai Headshot,Super Sphere of Destruction,,
154,Whis,Flying Kicks,Blaster Wave,Heavy Finish,Flying Kicks,Barrier ,Snack Time,Prelude to Destruction,Symphonic Destruction,Epilogue to Destruction,,
155,Goku Black,Heavy Finish,Ki Blast Cannon,Flying Kicks,Heavy Finish,Wild Sense,Finish Sign,Black Power Ball,Black Bind,Black Kamehameha,,
156,Goku Black Super Sayian Rose,Flying Kicks,Heavy Finish ,Rolling Hammer,Ki Wave,Instant Transmission,Audacious Laugh,Black Kamehameha,Godly Display Slash,Godly Black Kamehameha,,
157,Zamasu,Flying Kicks,Rolling Hammer,Heavy Finish,Ki Blast Cannon,Immortal Body,Afterimage Strike,Divine Steel Blast,God Slicer,Holy Light Grenade,,
158,Fused Zamasu,Heavy Finish,Ki Blast Cannon,Flying Kicks,Rolling Hammer,Immortal Body,This is True Justice!,Holy Wraith,Blades of Judgement,Lightning of Absolution,,
159,Fused Zamasu Half Corrupted,Flying Kicks,Heavy Finish,Rolling Hammer,Ki Blast Cannon,Explosive Wave,Light of Justice,Mark of Condemnation,Violent Fierce God Slicer,Divine Hammer,,
160,Hit,Flying Kicks,Ki Blast Cannon ,Rolling Hammer ,Heavy Finish ,Ki Clone,Skip,Assassin's Art,Time Skip/Jump Strike,Time Prison,,
161,Frost,Flying Kicks      ,Ki Blast Cannon ,Heavy Finish,Rolling Hammer,Explosive Wave,Welcome to My World,Chaos Beam ,Secret Poison,Chaos Ball,,
162,Cabba,Flying Kicks     ,Flying Kicks,Heavy Finish,Blaster Wave,Explosive Wave,Full Power,Galick Cannon,High Speed Rush,Galick Rage,,
163,Cabba Super Sayian,Flying Kicks     ,Blaster Wave,Ki Wave ,Heavy Finish,Explosive Wave,Wild Sense,Galick Rain ,Galick Rage,Super Galick Cannon,,
164,Cabba Super Sayian 2,Heavy Finish     ,Blaster Wave,Ki Wave ,Flying Kicks,Explosive Wave,Growth,Super Galick Cannon,Galick Rain,Final Stream,,
165,Caulifla,Flying Kicks     ,Heavy Finish,Rolling Hammer,Ki Blast Cannon,False Courage,Wild Sense,Full-Power Energy Wave,Super Explosive Wave,Crush Cannon,,
166,Caulifla Super Sayian 2,Ki Blast Cannon       ,Heavy Finish,Rolling Hammer,Flying Kicks,Wild Sense,Full Power,Energy Blast,High Power Rush,Limit Break Blaster,,
167,Kale,Flying Kicks,Heavy Finish ,Ki Blast Cannon,Flying Kicks,Full-Power Charge,Going Berserk,Resistance Cannon,Full-Power Energy Blast Volley,Resistance Blast,,
168,Kale Super Sayian Berserk,Ki Blast Cannon,Flying Kicks,Rolling Hammer,Heavy Finish,Cry of Rage,Berserk Rage,Gigantic Impact,Gigantic Throw,Berserk Blaster,,
169,Kale Super Sayian,Heavy Finish,Rolling Hammer,Blaster Wave,Heavy Finish,Wild Sense,Saiyan Spirit,Resistance Blast,Super Explosive Wave,Limit Break Blaster,,
170,Kefla,Heavy Finish,Flying Kicks,Ki Blast Cannon,Heavy Finish,Wild Semse,High-Tension,Blaster Ball,Gigantic Swing,Gigantic Burn,,
171,Kefla Super Sayian,Heavy Finish,Flying Kicks,Ki Blast Cannon,Rolling Hammer,False Courage ,Finish Sign,Blaster Ball,Gigantic Claw,Hexa-Cannonball,,
172,Kefla Super Sayian 2,Heavy Finish,Rolling Hammer,Flying Kicks ,Heavy Finish,Sayian Spirit,I'm Number One!,Gigantic Ray,Gigantic Breaker,Gigantic Burst,,
173,Jirin,Ki Blast Cannon,Heavy Finish,Flying Kicks,Rolling Hammer,Ki Pressure,Meditation,Power Impact,Infinity Rush,Heat Break,,
174,Jirin Full Power,Blaster Wave,Heavy Finish,Flying Kicks,Rolling Hammer,Ki Storm,Strength is Absolute!,Heatwave Magnetron,Overheating Blast,Omegaheat Magnetron,,
175,Toppo,Flying Kicks,Rolling Hammer,Heavy Finish,Ki Blast Cannon,Justice!,Pride Trooper Pose 1,Justice Flash,Justice Tornado,United Justice Stream,,
176,Toppo God of Destruction,Blaster Wave ,Flying Kicks,Rolling Hammer,Heavy Finish,Resolution,Hakai Aura,Destruction Flash,Sphere of Destruction,Super Large Sphere of Destruction,,
177,Dyspo,Flying Kicks     ,Flying Kicks,Ki Blast Cannon,Heavy Finish,Super Maximum Light Speed Mode,Pride Trooper Pose 2,Justice Crusher,Justice Kick,United Justice Stream,,
178,Bergamo,Flying Kicks     ,Ki Wave ,Heavy Finish,Rolling Hammer,Howl,Come at Me!,Wolfgang Penetrator,Danger Knuckle,Triangle Danger Beam ,,
179,Ribrianne,Ki Blast Cannon,Heavy Finish,Heavy Finish,Rolling Hammer,Light of Love,Maiden's Fury,Pretty Cannon,Maiden's Charge,Infinite Love,,
180,Kakunsa,Flying Kicks,Ki Blast Cannon,Rolling Hammer,Heavy Finish,Wild Sense,Maiden's Fury,Primal Charge,Primal Instinct ,Love Synphony,,
181,Roasie,Ki Blast Cannon,Flying Kicks,Heavy Finish,Ki Blast Cannon,Full-Power Charge,Maiden's Fury,Yatchaina Fist,Full-Power Energy Blast Volley,Love Synphony,,
182,Anilaza,N/A           ,N/A,N/A,N/A,Ultrasonic Sensor,Howl,Warp Punch,Spread Energy Blast,Destruction Burst,,`


const imgPathSrc = `00_Android_18_Super_1920x1080.webp
100 - Anilaza - 1920x1080.webp
101 - Nail - 1920x1080.webp
102 - Frieza (Z) 1st Form - 1920x1080.webp
103 - Frieza (Z) 2nd Form - 1920x1080.webp
104 - Frieza (Z) 3rd Form - 1920x1080.webp
105 - Frieza (Z) 4th Form - 1920x1080.webp
106 - Frieza (Z) Full Power - 1920x1080.webp
107 - Chiaotzu - 1920x1080.webp
108 - Saibaman - 1920x1080.webp
109 - Zarbon - 1920x1080.webp
10_Son_Goku_Super_Saiyan_God_Super_1920x1080.webp
110 - Super Zarbon - 1920x1080.webp
111 -Dodoria - 1920x1080.webp
112 - Cui - 1920x1080.webp
113 - Ginyu - 1920x1080.webp
114 - Recoome - 1920x1080.webp
115 - Guldo - 1920x1080.webp
116 - Gohan (Teen) - 1920x1080.webp
117 - Gohan (Teen) Super Saiyan - 1920x1080.webp
118 - Gohan (Teen) Super Saiyan 2 - 1920x1080.webp
119 - Trunks (Melee) - 1920x1080.webp
11_Son_Goku_Super_Saiyan_God_Super_Saiyan_Super_1920x1080.webp
12 - Goku (Super), Ultra Instinct - 1920x1080.webp
120 - Android 17 (Z) - 1920x1080.webp
121 - Android 16 - 1920x1080.webp
122 - Android 19 - 1920x1080.webp
123 - Dr. Gero - 1920x1080.webp
124 - Cell 1st Form - 1920x1080.webp
125 - Cell 2nd Form - 1920x1080.webp
126 - Perfect Cell - 1920x1080.webp
127 - Cell Jr. - 1920x1080.webp
128 - Piccolo (Fused with Kami) - 1920x1080.webp
129 - King Cold - 1920x1080.webp
130 - Mecha Frieza - 1920x1080.webp
131 - Great Saiyaman - 1920x1080.webp
132 - Babidi - 1920x1080.webp
133 - Gohan (Adult) Super Saiyan - 1920x1080.webp
134 - Majin Buu (Evil) - 1920x1080.webp
135 - Super Buu - 1920x1080.webp
136 - Ultimate Gohan - 1920x1080.webp
137 - Super Buu (Gotenks Absorbed) - 1920x1080.webp
138 - Super Buu (Gohan Absorbed) - 1920x1080.webp
139 - Kid Buu - 1920x1080.webp
140 - GOKU (GT) - 1920x1080.webp
141 - PAN (GT) - 1920x1080.webp
142 - GOKU (GT) SUPER SAIYAN - 1920x1080.webp
143 - BABY VEGETA - 1920x1080.webp
144 - GOKU (GT) SUPER SAIYAN 3 - 1920x1080.webp
145 - SUPER BABY 1 (GT) - 1920x1080.webp
146 - SUPER BABY 2 (GT) - 1920x1080.webp
147 - UUB (GT) - 1920x1080.webp
148 - MAJUUB (GT) - 1920x1080.webp
149 - GOKU (GT) SUPER SAIYAN 4 - 1920x1080.webp
14_Vegeta_Z_Early_1920x1080.webp
150 - GREAT APE BABY (GT) - 1920x1080.webp
151 - SYN SHENRON (GT) - 1920x1080.webp
152 - OMEGA SHENRON (GT) - 1920x1080.webp
153 - VEGETA (GT) SUPER SAIYAN 4 - 1920x1080.webp
154 - GOGETA (GT) SUPER SAIYAN 4 - 1920x1080.webp
155 - Frieza Force Soldier - 1920x1080.webp
156 - Cabba - 1920x1080.webp
157 - Frost - 1920x1080.webp
158 - Toppo, God of Destruction - 1920x1080.webp
159 - Cabba, Super Saiyan - 1920x1080.webp
15_Vegeta_Super_Saiyan_Z_Early_1920x1080.webp
160 - Cabba, Super Saiyan 2 - 1920x1080.webp
161 - Broly (Z) - 1920x1080.webp
162 - Broly (Z), Super Saiyan - 1920x1080.webp
163 - Broly (Z), Legendary Super Saiyan - 1920x1080.webp
164 - Cooler - 1920x1080.webp
165 - Cooler, Final Form - 1920x1080.webp
166 - Metal Cooler - 1920x1080.webp
167 - Android 13 - 1920x1080.webp
168 - Fusion Android 13 - 1920x1080.webp
169 - Super Garlic Jr. - 1920x1080.webp
16_Super_Vegeta_1920x1080.webp
170 - Dr. Wheelo - 1920x1080.webp
171 - Lord Slug - 1920x1080.webp
172 - Lord Slug, Giant Form - 1920x1080.webp
173 - Turles - 1920x1080.webp
174 - Bojack - 1920x1080.webp
175 - Full-Power Bojack - 1920x1080.webp
176 - Hirudegarn - 1920x1080.webp
177 - Tapion - 1920x1080.webp
178 - Janemba - 1920x1080.webp
179 - Super Janemba - 1920x1080.webp
17_Vegeta_Z_End_1920x1080.webp
180 - Super Gogeta (Z) - 1920x1080.webp
181 - Goku (Teen) - 1920x1080.webp
182 - Goku Mini - 1920x1080.webp
18_Vegeta_Super_Saiyan_Z_End_1920x1080.webp
19_Vegeta_Super_Saiyan_2_Z_End_1920x1080.webp
1_Son_Goku_Z_Early_1920x1080.webp
20_Majin_Vegeta_1920x1080.webp
20_Vegeta_Z_Scouter_1920x1080.webp
21_Great_Ape_Vegeta_1920x1080.webp
21_Vegeta_Super_1920x1080.webp
22_Vegeta_Super_Saiyan_Super_1920x1080.webp
23_Vegeta_Super_Saiyan_God_Super_1920x1080.webp
24_Vegeta_Super_Saiyan_God_Super_Saiyan_Super_1920x1080.webp
25_Piccolo_1920x1080.webp
26_Krillin_1920x1080.webp
27_Yamcha_1920x1080.webp
28_Tien_Shinhan_1920x1080.webp
29_Trunks_Super_Saiyan_Melee_1920x1080.webp
2_Son_Goku_Z_Mid_1920x1080.webp
30_Future Trunks_Super_Saiyan_1920x1080.webp
31_Frieza_Super_1920x1080.webp
32_Cell_Perfect_Form_1920x1080.webp
33_Majin_Buu_1920x1080.webp
34_Mr._Satan_1920x1080.webp
36_Android_18_1920x1080.webp
37_Broly_Super_1920x1080.webp
38_Broly_Super_Saiyan_Super_1920x1080.webp
39_Jiren_1920x1080.webp
3_Son_Goku_Super_Saiyan_Z_Mid_1920x1080.webp
40_Bergamo_1920x1080.webp
41_Super_Trunks_1920x1080.webp
42_Dyspo_1920x1080.webp
43_Kakunsa_1920x1080.webp
44_Master Roshi_Max_Power_1920x1080.webp
45_Nappa_1920x1080.webp
46_Burter_1920x1080.webp
47_Toppo_1920x1080.webp
48_Jeice_1920x1080.webp
49_Kale_Super_Saiyan_Berserk_1920x1080.webp
4_Son_Goku_Z_End_1920x1080.webp
50_Broly_Super_Super_Saiyan_Full_Power_1920x1080.webp
51_Hit_1920x1080.webp
52_Beerus_1920x1080.webp
53_Gohan_Adult_1920x1080.webp
54_Videl_1920x1080.webp
55_Gohan_Future_1920x1080.webp
56_Gohan_Future_Super_Saiyan_1920x1080.webp
57_Gohan_Kid_1920x1080.webp
58_Master_Roshi_1920x1080.webp
59_Trunks_Sword_1920x1080.webp
5_Son_Goku_Super_Saiyan_Z_End_1920x1080.webp
60_Trunks_Sword_Super_Saiyan_1920x1080.webp
61_Whis_1920x1080.webp
62 - Trunks (Kid) -1920x1080.webp
63 - Trunks (Kid), Super Saiyan -1920x1080.webp
64 - Goten -1920x1080.webp
65 - Goten, Super Saiyan -1920x1080.webp
66 - Gotenks -1920x1080.webp
67 - Gotenks (Super Saiyan) -1920x1080.webp
68 - Gotenks (Super Saiyan 3) -1920x1080.webp
69 - Kale -1920x1080.webp
6_Son_Goku_Super Saiyan 2_Z_End_1920x1080.webp
70 - Kale (Super Saiyan) -1920x1080.webp
71 - Caulifla -1920x1080.webp
72 - Caulifla (Super Saiyan 2) -1920x1080 (1).webp
72 - Caulifla (Super Saiyan 2) -1920x1080.webp
73 - Kefla -1920x1080.webp
74 - Kefla (Super Saiyan) -1920x1080.webp
75 - Kefla (Super Saiyan 2) -1920x1080.webp
76 - Vegito -1920x1080.webp
77 - Vegito, Super Saiyan God Super Saiyan -1920x1080.webp
78 - Gogeta (Super) -1920x1080.webp
79 - Gogeta (Super), Super Saiyan -1920x1080.webp
7_Son_Goku_Super_Saiyan 3_Z_End_1920x1080.webp
80 - Gogeta (Super), Super Saiyan God Super Saiyan -1920x1080.webp
81 - Fused Zamasu -1920x1080.webp
82 - Fused Zamasu, Half-Corrupted -1920x1080.webp
84 - Gohan (Adult), Super Saiyan 2 - 1920x1080.webp
85 - Golden Frieza - 1920x1080.webp
86 - Bardock - 1920x1080.webp
87 - Raditz - 1920x1080.webp
88 - Goku Black - 1920x1080.webp
89 - Zamasu - 1920x1080.webp
8_Son_Goku_Super_1920x1080.webp
90 - Jiren, Full Power - 1920x1080.webp
91 - Goku (Super), Ultra Instinct -Sign- - 1920x1080.webp
92 - Super Vegito - 1920x1080.webp
93 - Yajirobe - 1920x1080.webp
94 - Dabura - 1920x1080.webp
95 - Spopovich - 1920x1080.webp
96 - Goku Black, Super Saiyan Rose - 1920x1080.webp
97 - Future Trunks - 1920x1080.webp
98 - Ribrianne - 1920x1080.webp
99 - Roasie - 1920x1080.webp
9_Goku_Super_Saiyan_Super_1920x1080.webp


`

export type Fighter = {

id:string,
characterName:string,

characterClass:string,
cost:string,
switch:string,

//Defence
health:string,
melee:string,
energy:string,
armor:string,

//attack
rush:string,
smash:string,
throw:string,
pursuit:string,
revenge:string,
stagger:string,

//special Attack
super:string,
ultimate:string,

//combo
shortDash:string,

//ki
kiBlast:string,
KiBlastCost:string,
KiBlastLimit:string,
startingKi:string,
kiCharge:string,
sparkingCharge:string,
sparkingDuration:string,
attackKiGain:string,
kiRegen:string,
kiRegenRange:string,

//skill
skillStart:string,
skillLimit:string,
SkillRegeneration:string,
skillDamage:string

//misc
//misc:string









rushChain1:string,
rushChain2:string,
rushChain3:string,
rushChain4:string,
skillOne:string,
skillTwo:string,
blastOne:string,
blastTwo:string,
ultimateBlast:string,

image:string
}



export function SetFighterImages(fighters:Fighter[]){

    for(let i = 0;i<fighters.length;i++){
        let img = imageList[fighters[i].id as any];
        if(img){
            fighters[i].image = img;
        }
    }

}
export function SetFighterImagesOld(fighters:Fighter[]){
   
    let imageSplit = imgPathSrc.split('.webp');
    imageSplit = imageSplit.map(s=>s.trim()+".webp");

  
    // for(let i = 0;i<fighters.length;i++){
    //     let fighter = fighters[i];
    //     let id = fighter.id;
  
    //     for(let e = 0; e <imageSplit.length;e++){
    //         let str = imageSplit[e];
    //         if(str.includes('_')){

    //             str = str.split('_')[0];
              
    //         }
    //         else{
    //             str = str.split(' ')[0];
    //         }

    //         if(str === id){
    //             fighter.image = imageSplit[e];
    //             break;
    //         }

    //     }

    // }

    fighters = fighters.sort((a,b)=>{


        if(a.characterName.includes('Black')){
            return -1;
        }
      
            if(a.characterName.includes('GT')){
                if(b.characterName.includes('GT'))
                    return 0;
                return -1;
            }
              
            else if(b.characterName.includes('GT'))
                return 1;

   


        return -(a.characterName.length -b.characterName.length)
    });


    for(let i = 0;i<fighters.length;i++){
        let fighter = fighters[i];
        let nameToSplit = fighter.characterName.toLocaleLowerCase().replace('(','').replace(')','').replace(' - ',' ').replace(',','').replace('é','e');
        let nameSplit = nameToSplit.split(' ').filter(s=>s !== '').map(s=>s.trim());
 


        let toAdd = ''
        for(let e = 0; e <imageSplit.length;e++){
            let found = true;
            let str = imageSplit[e].toLowerCase();

   
            for(let j = 0;j<nameSplit.length;j++){



                if(!str.includes(nameSplit[j])){
                    found = false;
                   break
                   
                }
                else{
                    toAdd = imageSplit[e];
                }
            }

            if(found){
                imageSplit.splice(e,1);
                fighter.image = toAdd;
                break
            }
          

        }

    }

    fighters = fighters.sort((a,b)=>{

        return parseInt(a.id) - parseInt(b.id);

    });

    let log = "{";

    for(let i = 0;i<fighters.length;i++){
        log +="'"+ fighters[i].id + "':'"+fighters[i].image+"',\n";
    }
    log+="}";
    console.log(log);




}


export function CreateBlankFighter():Fighter{
    return {
        id:'',
        characterName:'',
     
        characterClass:'',
        cost:'',
        switch:'',
        health:'',
        melee:'',
        energy:'',
        armor:'',
        rush:'',
        smash:'',
        throw:'',
        pursuit:'',
        revenge:'',
        stagger:'',
        super:'',
        ultimate:'',
        shortDash:'',
        kiBlast:'',
        KiBlastCost:'',
        KiBlastLimit:'',
        startingKi:'',
        kiCharge:'',
        sparkingCharge:'',
        sparkingDuration:'',
        attackKiGain:'',
        kiRegen:'',
        kiRegenRange:'',
        skillStart:'',
        skillLimit:'',
        SkillRegeneration:'',
        skillDamage:'',
        //misc:'',
        rushChain1:'',
        rushChain2:'',
        rushChain3:'',
        rushChain4:'',
        skillOne:'',
        skillTwo:'',
        blastOne:'',
        blastTwo:'',
        ultimateBlast:'',
        image:''
    }
}

export function ConvertCommasInString(string:string):string{


    let inQuotes = false;

    let newString = '';
    for(let i = 0;i<string.length;i++){
        if(string[i] === '"'){
            inQuotes = !inQuotes;
        }

        else if(string[i] === ',' && inQuotes){
            newString += '!@!';
        }else{
            newString += string[i];
        }
    }

    return newString;





}

export function CreateFighterFromLine(line:string):Fighter{

    let fighter = CreateBlankFighter();
  
    let split = line.split(',');
    split = split.map(s=>s.replace('!@!',','));

    fighter.id = split[0];
    fighter.characterName = split[1];
    fighter.characterClass = split[2];
    fighter.cost = split[3];
    fighter.switch = split[4];
    fighter.health = split[5];
    fighter.melee = split[6];
    fighter.energy = split[7];
    fighter.armor = split[8];
    fighter.rush = split[9];
    fighter.smash = split[10];
    fighter.throw = split[11];
    fighter.pursuit = split[12];
    fighter.revenge = split[13];
    fighter.stagger = split[14];
    fighter.super = split[15];
    fighter.ultimate = split[16];
    fighter.shortDash = split[17];
    fighter.kiBlast = split[18];
    fighter.KiBlastCost = split[19];
    fighter.KiBlastLimit = split[20];
    fighter.startingKi = split[21];
    fighter.kiCharge = split[22];
    fighter.sparkingCharge = split[23];
    fighter.sparkingDuration = split[24];
    fighter.attackKiGain = split[25];
    fighter.kiRegen = split[26];
    fighter.kiRegenRange = split[27];
    fighter.skillStart = split[28];
    fighter.skillLimit = split[29];
    fighter.SkillRegeneration = split[30];
    fighter.skillDamage = split[31];
    //fighter.misc = split[32];

    return fighter;
}

export function ApplySkillsToFighers(fighters:Fighter[], lines:string[]){

    for(let i = 0;i<lines.length;i++){
        
        let split = lines[i].split(',');
        let id = split[0];
        let fighter = fighters.find(f=>f.id === id);

        split = split.map(s=>s.replace('!@!',','));
        if(!fighter){
            continue;
        }

        fighter.rushChain1 = split[2];
        fighter.rushChain2 = split[3];
        fighter.rushChain3 = split[4];
        fighter.rushChain4 = split[5];
        fighter.skillOne = split[6];
        fighter.skillTwo = split[7];
        fighter.blastOne = split[8];
        fighter.blastTwo = split[9];
        fighter.ultimateBlast = split[10];


    }

}

export default function GetFighters(){

    let csvA = ConvertCommasInString(csvSource);
    let lines = csvA.split('\n');

    lines.shift();
    lines.shift();




    let fighters = [];
    for(let i = 0; i < lines.length; i++){
     fighters.push(CreateFighterFromLine(lines[i]));
    }

    let csvB = ConvertCommasInString(csvSkilSrc);
    let skillLines  = csvB.split('\n');
    skillLines.shift();
    skillLines.shift();

    ApplySkillsToFighers(fighters,skillLines);
    SetFighterImages(fighters);
    return fighters;


}


// function GetBaseAttack(fighter:Fighter):number{

//     let smash = parseFloat(fighter.smash);
//     let trw = parseFloat(fighter.throw);
//     let pursuit = parseFloat(fighter.pursuit);
//     let revenge = parseFloat(fighter.revenge);

//     return smash*2 + trw + pursuit + revenge;

// }

// function GetBaseDefence(fighter:Fighter):number{


//     let melee = parseFloat(fighter.melee);
//     let energy = parseFloat(fighter.energy);
//     let armor = parseFloat(fighter.armor);

//     armor = armor - 89

//     return melee + energy + armor;

// }