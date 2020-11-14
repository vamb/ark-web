import React from 'react'

// let strList = [
// './img/1-yeyan.jpg',
// './img/2-heijiao.jpg',
// './img/3-12f.jpg',
// './img/4-huoshen.jpg',
// './img/5-castle.jpg',
// './img/6-yuejianye.jpg',
// './img/7-fen.jpg',
// './img/8-lancet.jpg',
// './img/9-thrmex.jpg',
// './img/10-w.jpg',
// './img/11-linguang.jpg',
// './img/12-yaye.jpg',
// './img/13-yisang.jpg',
// './img/14-yifulite.jpg',
// './img/15-kuiying.jpg',
// './img/16-keluosi.jpg',
// './img/17-lindong.jpg',
// './img/18-chuxue.jpg',
// './img/19-keebo.jpg',
// './img/20-kedao.jpg',
// './img/21-huafalin.jpg',
// './img/22-kati.jpg',
// './img/23-kada.png',
// './img/24-gumi.jpg',
// './img/25-shiduhuade.png',
// './img/26-shiduhuade.jpg',
// './img/27-niu.jpg',
// './img/28-jiaweier.jpg',
// './img/29-siyue.png',
// './img/30-yintuoluo.jpg',
// './img/31-diling.jpg',
// './img/32-jianlei.jpg',
// './img/33-saileiya.jpg',
// './img/34-yeyan.jpg',
// './img/35-yeying.jpg',
// './img/36-yemo.jpg',
// './img/37-tianhuo.jpg',
// './img/40-aosite.png',
// './img/41-jie.png',
// './img/42-shoulinren.jpg',
// './img/43-anzhela.png',
// './img/44-andeqieer.jpg',
// './img/45-anbier.jpg',
// './img/46-anjielina.jpg',
// './img/47-yan.jpg',
// './img/48-yaxin.jpg',
// './img/49-wulian.jpg',
// './img/50-buluoka.jpg',
// './img/51-nian.jpg',
// './img/52-youlingsha.jpg',
// './img/53-weifeng.jpg',
// './img/54-dekesasi.jpg',
// './img/55-jinzhe.jpg',
// './img/56-shengsha.jpg',
// './img/57-musi.jpg',
// './img/58-lapulande.jpg',
// './img/59-baisong.jpg',
// './img/60-tuijinzhiwang.jpg',
// './img/61-bandian.jpg',
// './img/62-duanya.png',
// './img/63-duanzuizhe.jpg',
// './img/64-sikadi.jpg',
// './img/65-zaolu.png',
// './img/66-xinji.jpg',
// './img/67-xingxiong.jpg',
// './img/68-puluowangsi.jpg',
// './img/69-ansuo.jpg',
// './img/70-baoxing.jpg',
// './img/71-yuehe.jpg',
// './img/72-moyao.jpg',
// './img/73-dubing.jpg',
// './img/74-jieke.png',
// './img/75-jiexika.jpg',
// './img/76-jijing.jpg',
// './img/77-bohui.png',
// './img/78-gelaokesi.jpg',
// './img/79-gelani.jpg',
// './img/80-geleiyi.jpg',
// './img/81-taojinniang.jpg',
// './img/82-mei.jpg',
// './img/83-meier.jpg',
// './img/84-xinlan.jpg',
// './img/85-jici.png',
// './img/86-sengran.png',
// './img/87-huaihu.jpg',
// './img/88-paopao.png',
// './img/89-bodengke.png',
// './img/90-niyan.png',
// './img/91-liuxing.jpg',
// './img/92-shenhaise.jpg',
// './img/93-qingliu.jpg',
// './img/94-qingdaofu.jpg',
// './img/95-wendi.jpg',
// './img/96-huihou.jpg',
// './img/98-yanke.jpg',
// './img/99-yanrong.jpg',
// './img/100-huang.jpg',
// './img/101-suishi.png',
// './img/102-temimi.png',
// './img/103-shixie.jpg',
// './img/104-liefeng.jpg',
// './img/105-meilansha.jpg',
// './img/106-xiaguang.png',
// './img/107-baijin.jpg',
// './img/108-baixue.jpg',
// './img/109-baimianxiao.jpg',
// './img/110-zhenli.jpg',
// './img/111-shimian.jpg',
// './img/112-li.jpg',
// './img/113-aisidaier.jpg',
// './img/113-xiyin.jpg',
// './img/114-aiyafala.jpg',
// './img/114-kong.jpg',
// './img/115-fulanka.jpg',
// './img/115-kongbao.jpg',
// './img/116-furong.jpg',
// './img/116-migelu.jpg',
// './img/117-fangting.png',
// './img/117-xuyu.png',
// './img/118-hong.jpg',
// './img/118-weicao.jpg',
// './img/119-hongyun.jpg',
// './img/119-susuluo.jpg',
// './img/120-hongdou.jpg',
// './img/120-kuai.png',
// './img/121-chanwan.jpg',
// './img/121-mositima.jpg',
// './img/122-laiyinhate.png',
// './img/122-nengtianshi.jpg',
// './img/123-landu.jpg',
// './img/124-bolv.png',
// './img/125-shetuxiang.jpg',
// './img/126-mila.jpg',
// './img/127-jiaofeng.jpg',
// './img/128-xunshi.jpg',
// './img/129-shihuaiya.jpg',
// './img/130-tiaoxiangshi.jpg',
// './img/131-jiawei.jpg',
// './img/132-helage.jpg',
// './img/133-hemo.jpg',
// './img/134-yuanshan.jpg',
// './img/135-midiexiang.png',
// './img/136-songzangren.jpg',
// './img/137-suantang.png',
// './img/138-linlan.png',
// './img/139-yinhui.jpg',
// './img/140-zhutie.jpg',
// './img/141-xilan.jpg',
// './img/142-shanling.jpg',
// './img/143-a.jpg',
// './img/144-axiao.jpg',
// './img/145-amiyajinwei.png',
// './img/146-amiyafashu.jpg',
// './img/147-chen.jpg',
// './img/148-yunxing.jpg',
// './img/149-xuezhi.jpg',
// './img/150-leishe.jpg',
// './img/151-shuangye.jpg',
// './img/152-bianreng.png',
// './img/153-fengdi.jpg',
// './img/154-shitieshou.jpg',
// './img/155-maizhelun.jpg',
// './img/156-hei.jpg',
// './img/157-xiangcao.jpg',
// './img/158-kesong.jpg',
// './img/160-linyu.jpg',
// './img/161-ansaier.jpg',
// './img/162-xunlinzhe.jpg',
// './img/163-dullin.jpg',
// './img/164-paopuka.jpg',
// ]
//
// const returnList = [
//     "yeyan_1",
//     "heijiao_2",
//     "12f_3",
//     "huoshen_4",
//     "castle_5",
//     "yuejianye_6",
//     "fen_7",
//     "lancet_8",
//     "thrmex_9",
//     "w_10",
//     "linguang_11",
//     "yaye_12",
//     "yisang_13",
//     "yifulite_14",
//     "kuiying_15",
//     "keluosi_16",
//     "lindong_17",
//     "chuxue_18",
//     "keebo_19",
//     "kedao_20",
//     "huafalin_21",
//     "kati_22",
//     "kada_23",
//     "gumi_24",
//     "shiduhuade_25",
//     "shiduhuade_26",
//     "niu_27",
//     "jiaweier_28",
//     "siyue_29",
//     "yintuoluo_30",
//     "diling_31",
//     "jianlei_32",
//     "saileiya_33",
//     "yeyan_34",
//     "yeying_35",
//     "yemo_36",
//     "tianhuo_37",
//     "aosite_38",
//     "jie_39",
//     "shoulinren_40",
//     "anzhela_41",
//     "andeqieer_42",
//     "anbier_43",
//     "anjielina_44",
//     "yan_45",
//     "yaxin_46",
//     "wulian_47",
//     "buluoka_48",
//     "nian_49",
//     "youlingsha_50",
//     "weifeng_51",
//     "dekesasi_52",
//     "jinzhe_53",
//     "shengsha_54",
//     "musi_55",
//     "lapulande_56",
//     "baisong_57",
//     "tuijinzhiwang_58",
//     "bandian_59",
//     "duanya_60",
//     "duanzuizhe_61",
//     "sikadi_62",
//     "zaolu_63",
//     "xinji_64",
//     "xingxiong_65",
//     "puluowangsi_66",
//     "ansuo_67",
//     "baoxing_68",
//     "yuehe_69",
//     "moyao_70",
//     "dubing_71",
//     "jieke_72",
//     "jiexika_73",
//     "jijing_74",
//     "bohui_75",
//     "gelaokesi_76",
//     "gelani_77",
//     "geleiyi_78",
//     "taojinniang_79",
//     "mei_80",
//     "meier_81",
//     "xinlan_82",
//     "jici_83",
//     "sengran_84",
//     "huaihu_85",
//     "paopao_86",
//     "bodengke_87",
//     "niyan_88",
//     "liuxing_89",
//     "shenhaise_90",
//     "qingliu_91",
//     "qingdaofu_92",
//     "wendi_93",
//     "huihou_94",
//     "yanke_95",
//     "yanrong_96",
//     "huang_97",
//     "suishi_98",
//     "temimi_99",
//     "shixie_100",
//     "liefeng_101",
//     "meilansha_102",
//     "xiaguang_103",
//     "baijin_104",
//     "baixue_105",
//     "baimianxiao_106",
//     "zhenli_107",
//     "shimian_108",
//     "li_109",
//     "aisidaier_110",
//     "xiyin_111",
//     "aiyafala_112",
//     "kong_113",
//     "fulanka_114",
//     "kongbao_115",
//     "furong_116",
//     "migelu_117",
//     "fangting_118",
//     "xuyu_119",
//     "hong_120",
//     "weicao_121",
//     "hongyun_122",
//     "susuluo_123",
//     "hongdou_124",
//     "kuai_125",
//     "chanwan_126",
//     "mositima_127",
//     "laiyinhate_128",
//     "nengtianshi_129",
//     "landu_130",
//     "bolv_131",
//     "shetuxiang_132",
//     "mila_133",
//     "jiaofeng_134",
//     "xunshi_135",
//     "shihuaiya_136",
//     "tiaoxiangshi_137",
//     "jiawei_138",
//     "helage_139",
//     "hemo_140",
//     "yuanshan_141",
//     "midiexiang_142",
//     "songzangren_143",
//     "suantang_144",
//     "linlan_145",
//     "yinhui_146",
//     "zhutie_147",
//     "xilan_148",
//     "shanling_149",
//     "a_150",
//     "axiao_151",
//     "amiyajinwei_152",
//     "amiyafashu_153",
//     "chen_154",
//     "yunxing_155",
//     "xuezhi_156",
//     "leishe_157",
//     "shuangye_158",
//     "bianreng_159",
//     "fengdi_160",
//     "shitieshou_161",
//     "maizhelun_162",
//     "hei_163",
//     "xiangcao_164",
//     "kesong_165",
//     "linyu_166",
//     "ansaier_167",
//     "xunlinzhe_168",
//     "dullin_169",
//     "paopuka_170"
//   ]

import yeyan_1 from './img/1-yeyan.jpg'
import heijiao_2 from './img/2-heijiao.jpg'
import f12_3 from './img/3-12f.jpg'
import huoshen_4 from './img/4-huoshen.jpg'
import castle_5 from './img/5-castle.jpg'
import yuejianye_6 from './img/6-yuejianye.jpg'
import fen_7 from './img/7-fen.jpg'
import lancet_8 from './img/8-lancet.jpg'
import thrmex_9 from './img/9-thrmex.jpg'
import w_10 from './img/10-w.jpg'
import linguang_11 from './img/11-linguang.jpg'
import yaye_12 from './img/12-yaye.jpg'
import yisang_13 from './img/13-yisang.jpg'
import yifulite_14 from './img/14-yifulite.jpg'
import kuiying_15 from './img/15-kuiying.jpg'
import keluosi_16 from './img/16-keluosi.jpg'
import lindong_17 from './img/17-lindong.jpg'
import chuxue_18 from './img/18-chuxue.jpg'
import keebo_19 from './img/19-keebo.jpg'
import kedao_20 from './img/20-kedao.jpg'
import huafalin_21 from './img/21-huafalin.jpg'
import kati_22 from './img/22-kati.jpg'
import kada_23 from './img/23-kada.png'
import gumi_24 from './img/24-gumi.jpg'
import shiduhuade_25 from './img/25-shiduhuade.png'
import shiduhuade_26 from './img/26-shiduhuade.jpg'
import niu_27 from './img/27-niu.jpg'
import jiaweier_28 from './img/28-jiaweier.jpg'
import siyue_29 from './img/29-siyue.png'
import yintuoluo_30 from './img/30-yintuoluo.jpg'
import diling_31 from './img/31-diling.jpg'
import jianlei_32 from './img/32-jianlei.jpg'
import saileiya_33 from './img/33-saileiya.jpg'
import yeyan_34 from './img/34-yeyan.jpg'
import yeying_35 from './img/35-yeying.jpg'
import yemo_36 from './img/36-yemo.jpg'
import tianhuo_37 from './img/37-tianhuo.jpg'
import aosite_38 from './img/40-aosite.png'
import jie_39 from './img/41-jie.png'
import shoulinren_40 from './img/42-shoulinren.jpg'
import anzhela_41 from './img/43-anzhela.png'
import andeqieer_42 from './img/44-andeqieer.jpg'
import anbier_43 from './img/45-anbier.jpg'
import anjielina_44 from './img/46-anjielina.jpg'
import yan_45 from './img/47-yan.jpg'
import yaxin_46 from './img/48-yaxin.jpg'
import wulian_47 from './img/49-wulian.jpg'
import buluoka_48 from './img/50-buluoka.jpg'
import nian_49 from './img/51-nian.jpg'
import youlingsha_50 from './img/52-youlingsha.jpg'
import weifeng_51 from './img/53-weifeng.jpg'
import dekesasi_52 from './img/54-dekesasi.jpg'
import jinzhe_53 from './img/55-jinzhe.jpg'
import shengsha_54 from './img/56-shengsha.jpg'
import musi_55 from './img/57-musi.jpg'
import lapulande_56 from './img/58-lapulande.jpg'
import baisong_57 from './img/59-baisong.jpg'
import tuijinzhiwang_58 from './img/60-tuijinzhiwang.jpg'
import bandian_59 from './img/61-bandian.jpg'
import duanya_60 from './img/62-duanya.png'
import duanzuizhe_61 from './img/63-duanzuizhe.jpg'
import sikadi_62 from './img/64-sikadi.jpg'
import zaolu_63 from './img/65-zaolu.png'
import xinji_64 from './img/66-xinji.jpg'
import xingxiong_65 from './img/67-xingxiong.jpg'
import puluowangsi_66 from './img/68-puluowangsi.jpg'
import ansuo_67 from './img/69-ansuo.jpg'
import baoxing_68 from './img/70-baoxing.jpg'
import yuehe_69 from './img/71-yuehe.jpg'
import moyao_70 from './img/72-moyao.jpg'
import dubing_71 from './img/73-dubing.jpg'
import jieke_72 from './img/74-jieke.png'
import jiexika_73 from './img/75-jiexika.jpg'
import jijing_74 from './img/76-jijing.jpg'
import bohui_75 from './img/77-bohui.png'
import gelaokesi_76 from './img/78-gelaokesi.jpg'
import gelani_77 from './img/79-gelani.jpg'
import geleiyi_78 from './img/80-geleiyi.jpg'
import taojinniang_79 from './img/81-taojinniang.jpg'
import mei_80 from './img/82-mei.jpg'
import meier_81 from './img/83-meier.jpg'
import xinlan_82 from './img/84-xinlan.jpg'
import jici_83 from './img/85-jici.png'
import sengran_84 from './img/86-sengran.png'
import huaihu_85 from './img/87-huaihu.jpg'
import paopao_86 from './img/88-paopao.png'
import bodengke_87 from './img/89-bodengke.png'
import niyan_88 from './img/90-niyan.png'
import liuxing_89 from './img/91-liuxing.jpg'
import shenhaise_90 from './img/92-shenhaise.jpg'
import qingliu_91 from './img/93-qingliu.jpg'
import qingdaofu_92 from './img/94-qingdaofu.jpg'
import wendi_93 from './img/95-wendi.jpg'
import huihou_94 from './img/96-huihou.jpg'
import yanke_95 from './img/98-yanke.jpg'
import yanrong_96 from './img/99-yanrong.jpg'
import huang_97 from './img/100-huang.jpg'
import suishi_98 from './img/101-suishi.png'
import temimi_99 from './img/102-temimi.png'
import shixie_100 from './img/103-shixie.jpg'
import liefeng_101 from './img/104-liefeng.jpg'
import meilansha_102 from './img/105-meilansha.jpg'
import xiaguang_103 from './img/106-xiaguang.png'
import baijin_104 from './img/107-baijin.jpg'
import baixue_105 from './img/108-baixue.jpg'
import baimianxiao_106 from './img/109-baimianxiao.jpg'
import zhenli_107 from './img/110-zhenli.jpg'
import shimian_108 from './img/111-shimian.jpg'
import li_109 from './img/112-li.jpg'
import aisidaier_110 from './img/113-aisidaier.jpg'
import xiyin_111 from './img/113-xiyin.jpg'
import aiyafala_112 from './img/114-aiyafala.jpg'
import kong_113 from './img/114-kong.jpg'
import fulanka_114 from './img/115-fulanka.jpg'
import kongbao_115 from './img/115-kongbao.jpg'
import furong_116 from './img/116-furong.jpg'
import migelu_117 from './img/116-migelu.jpg'
import fangting_118 from './img/117-fangting.png'
import xuyu_119 from './img/117-xuyu.png'
import hong_120 from './img/118-hong.jpg'
import weicao_121 from './img/118-weicao.jpg'
import hongyun_122 from './img/119-hongyun.jpg'
import susuluo_123 from './img/119-susuluo.jpg'
import hongdou_124 from './img/120-hongdou.jpg'
import kuai_125 from './img/120-kuai.png'
import chanwan_126 from './img/121-chanwan.jpg'
import mositima_127 from './img/121-mositima.jpg'
import laiyinhate_128 from './img/122-laiyinhate.png'
import nengtianshi_129 from './img/122-nengtianshi.jpg'
import landu_130 from './img/123-landu.jpg'
import bolv_131 from './img/124-bolv.png'
import shetuxiang_132 from './img/125-shetuxiang.jpg'
import mila_133 from './img/126-mila.jpg'
import jiaofeng_134 from './img/127-jiaofeng.jpg'
import xunshi_135 from './img/128-xunshi.jpg'
import shihuaiya_136 from './img/129-shihuaiya.jpg'
import tiaoxiangshi_137 from './img/130-tiaoxiangshi.jpg'
import jiawei_138 from './img/131-jiawei.jpg'
import helage_139 from './img/132-helage.jpg'
import hemo_140 from './img/133-hemo.jpg'
import yuanshan_141 from './img/134-yuanshan.jpg'
import midiexiang_142 from './img/135-midiexiang.png'
import songzangren_143 from './img/136-songzangren.jpg'
import suantang_144 from './img/137-suantang.png'
import linlan_145 from './img/138-linlan.png'
import yinhui_146 from './img/139-yinhui.jpg'
import zhutie_147 from './img/140-zhutie.jpg'
import xilan_148 from './img/141-xilan.jpg'
import shanling_149 from './img/142-shanling.jpg'
import a_150 from './img/143-a.jpg'
import axiao_151 from './img/144-axiao.jpg'
import amiyajinwei_152 from './img/145-amiyajinwei.png'
import amiyafashu_153 from './img/146-amiyafashu.jpg'
import chen_154 from './img/147-chen.jpg'
import yunxing_155 from './img/148-yunxing.jpg'
import xuezhi_156 from './img/149-xuezhi.jpg'
import leishe_157 from './img/150-leishe.jpg'
import shuangye_158 from './img/151-shuangye.jpg'
import bianreng_159 from './img/152-bianreng.png'
import fengdi_160 from './img/153-fengdi.jpg'
import shitieshou_161 from './img/154-shitieshou.jpg'
import maizhelun_162 from './img/155-maizhelun.jpg'
import hei_163 from './img/156-hei.jpg'
import xiangcao_164 from './img/157-xiangcao.jpg'
import kesong_165 from './img/158-kesong.jpg'
import linyu_166 from './img/160-linyu.jpg'
import ansaier_167 from './img/161-ansaier.jpg'
import xunlinzhe_168 from './img/162-xunlinzhe.jpg'
import dullin_169 from './img/163-dullin.jpg'
import paopuka_170 from './img/164-paopuka.jpg'

const ImgList = [
  yeyan_1,
  heijiao_2,
  f12_3,
  huoshen_4,
  castle_5,
  yuejianye_6,
  fen_7,
  lancet_8,
  thrmex_9,
  w_10,
  linguang_11,
  yaye_12,
  yisang_13,
  yifulite_14,
  kuiying_15,
  keluosi_16,
  lindong_17,
  chuxue_18,
  keebo_19,
  kedao_20,
  huafalin_21,
  kati_22,
  kada_23,
  gumi_24,
  shiduhuade_25,
  shiduhuade_26,
  niu_27,
  jiaweier_28,
  siyue_29,
  yintuoluo_30,
  diling_31,
  jianlei_32,
  saileiya_33,
  yeyan_34,
  yeying_35,
  yemo_36,
  tianhuo_37,
  aosite_38,
  jie_39,
  shoulinren_40,
  anzhela_41,
  andeqieer_42,
  anbier_43,
  anjielina_44,
  yan_45,
  yaxin_46,
  wulian_47,
  buluoka_48,
  nian_49,
  youlingsha_50,
  weifeng_51,
  dekesasi_52,
  jinzhe_53,
  shengsha_54,
  musi_55,
  lapulande_56,
  baisong_57,
  tuijinzhiwang_58,
  bandian_59,
  duanya_60,
  duanzuizhe_61,
  sikadi_62,
  zaolu_63,
  xinji_64,
  xingxiong_65,
  puluowangsi_66,
  ansuo_67,
  baoxing_68,
  yuehe_69,
  moyao_70,
  dubing_71,
  jieke_72,
  jiexika_73,
  jijing_74,
  bohui_75,
  gelaokesi_76,
  gelani_77,
  geleiyi_78,
  taojinniang_79,
  mei_80,
  meier_81,
  xinlan_82,
  jici_83,
  sengran_84,
  huaihu_85,
  paopao_86,
  bodengke_87,
  niyan_88,
  liuxing_89,
  shenhaise_90,
  qingliu_91,
  qingdaofu_92,
  wendi_93,
  huihou_94,
  yanke_95,
  yanrong_96,
  huang_97,
  suishi_98,
  temimi_99,
  shixie_100,
  liefeng_101,
  meilansha_102,
  xiaguang_103,
  baijin_104,
  baixue_105,
  baimianxiao_106,
  zhenli_107,
  shimian_108,
  li_109,
  aisidaier_110,
  xiyin_111,
  aiyafala_112,
  kong_113,
  fulanka_114,
  kongbao_115,
  furong_116,
  migelu_117,
  fangting_118,
  xuyu_119,
  hong_120,
  weicao_121,
  hongyun_122,
  susuluo_123,
  hongdou_124,
  kuai_125,
  chanwan_126,
  mositima_127,
  laiyinhate_128,
  nengtianshi_129,
  landu_130,
  bolv_131,
  shetuxiang_132,
  mila_133,
  jiaofeng_134,
  xunshi_135,
  shihuaiya_136,
  tiaoxiangshi_137,
  jiawei_138,
  helage_139,
  hemo_140,
  yuanshan_141,
  midiexiang_142,
  songzangren_143,
  suantang_144,
  linlan_145,
  yinhui_146,
  zhutie_147,
  xilan_148,
  shanling_149,
  a_150,
  axiao_151,
  amiyajinwei_152,
  amiyafashu_153,
  chen_154,
  yunxing_155,
  xuezhi_156,
  leishe_157,
  shuangye_158,
  bianreng_159,
  fengdi_160,
  shitieshou_161,
  maizhelun_162,
  hei_163,
  xiangcao_164,
  kesong_165,
  linyu_166,
  ansaier_167,
  xunlinzhe_168,
  dullin_169,
  paopuka_170
]

const ImgConstant = {}

// ImgConstant.washStr = ()=>{
//   let temp = []
//   if(ImgList && ImgList.length>0){
//     ImgList.map((item, idx)=>{
//       let tempStr = item.split('./img/')[1]
//       console.log('tempStr', tempStr)
//       tempStr = tempStr.split('.')[0]
//       let num = idx + 1
//       tempStr = tempStr.split('-')[1] + '_' + num
//       temp.push(tempStr)
//     })
//     console.log('test.washStr result', JSON.stringify(temp))
//   }
// }

ImgConstant.getImg = (idx)=>{
  // console.log('getImg idx', idx)
  // console.log('getImg src', ImgList[idx-1])
  return(
    <img src={ImgList[idx-1]} style={{width: '120px', height: '121px'}} />
  )
}

export default ImgConstant