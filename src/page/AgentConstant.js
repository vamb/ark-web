const AgentConstant = {}

AgentConstant.EXP_LEVEL = {
  NEW: { label: '新手', value: 0 },
  OLD: { label: "资深干员", value: 1 },
  MASTER: { label: "高级资深干员", value: 2 }
}

AgentConstant.EXP_LEVEL_LIST = [
  { label: '新手', value: 0 },
  { label: "资深干员", value: 1 },
  { label: "高级资深干员", value: 2 }
]

AgentConstant.BATTLE_POSITION = {
  SABER: { label: "近战位", value: 0 },
  ARCHER: { label: "远程位", value: 1}
}

AgentConstant.BATTLE_POSITION_LIST = [
  { label: "近战位", value: 0 },
  { label: "远程位", value: 1}
]

AgentConstant.GENTER = {
  MALE: { label: "男性", value: 0 },
  FEMALE: { label: '女性', value: 1 }
}

AgentConstant.GENTER_LIST = [
  { label: "男性", value: 0 },
  { label: '女性', value: 1 }
]

AgentConstant.IS_PUBLIC_TO_HIRE = {
  YES: { label: '是', value: 1 },
  NO: { label: '否', value: 0 }
}

AgentConstant.JOB_TYPE = {
  XIAN_FENG: { label: '先锋干员', value: 0 },
  JU_JI: { label: '狙击干员', value: 1 },
  YI_LIAO: { label: '医疗干员', value: 2 },
  SHU_SHI: { label: '术士干员', value: 3 },
  JIN_WEI: { label: '近卫干员', value: 4 },
  ZHONG_ZHUANG: { label: '重装干员', value: 5 },
  FU_ZHU: { label: '辅助干员', value: 6 },
  TE_ZHONG: { label: '特种干员', value: 7 },
}

AgentConstant.JOB_TYPE_LIST = [
  { label: '先锋干员', value: 0 },
  { label: '狙击干员', value: 1 },
  { label: '医疗干员', value: 2 },
  { label: '术士干员', value: 3 },
  { label: '近卫干员', value: 4 },
  { label: '重装干员', value: 5 },
  { label: '辅助干员', value: 6 },
  { label: '特种干员', value: 7 },
]

AgentConstant.TAG = {
  ZHI_LIAO: { label: "治疗", value: 0 },
  ZHI_YUAN: { label: "支援", value: 2 },
  SHU_CHU: { label: "输出", value: 3 },
  QUN_GONG: { label: "群攻", value: 4 },
  JIAN_SU: { label: "减速", value: 5 },
  SHENG_CUN: { label: "生存", value: 6 },
  FANG_HU: { label: "防护", value: 7 },
  XUE_RUO: { label: "削弱", value: 8 },
  WEI_YI: { label: "位移", value: 9 },
  KONG_CHANG: { label: "控场", value: 10 },
  BAO_FA: { label: "爆发", value: 11 },
  ZHAO_HUAN: { label: "召唤", value: 12 },
  KUAI_SU_FU_HUO: { label: "快速复活", value: 13 },
  FEI_YONG_HUI_FU: { label: "费用回复", value: 14 },
  ZHI_YUAN_JI_XIE: { label: "支援机械", value: 15 },
}

AgentConstant.TAG_LIST = [
  { label: "治疗", value: 0 },
  { label: "支援", value: 2 },
  { label: "输出", value: 3 },
  { label: "群攻", value: 4 },
  { label: "减速", value: 5 },
  { label: "生存", value: 6 },
  { label: "防护", value: 7 },
  { label: "削弱", value: 8 },
  { label: "位移", value: 9 },
  { label: "控场", value: 10 },
  { label: "爆发", value: 11 },
  { label: "召唤", value: 12 },
  { label: "快速复活", value: 13 },
  { label: "费用回复", value: 14 },
  { label: "支援机械", value: 15 },
]

AgentConstant.STAR = {
  ONE: { label: '1星', value: 1 },
  TWO: { label: '2星', value: 2 },
  THREE: { label: '3星', value: 3 },
  FOUR: { label: '4星', value: 4 },
  FIVE: { label: '5星', value: 5 },
  SIX: { label: '6星', value: 6 },
}

AgentConstant.STAR_LIST = [
  { label: '1星', value: 1 },
  { label: '2星', value: 2 },
  { label: '3星', value: 3 },
  { label: '4星', value: 4 },
  { label: '5星', value: 5 },
  { label: '6星', value: 6 },
]

export default AgentConstant