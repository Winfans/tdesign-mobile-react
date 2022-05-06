import React, { useState, useMemo } from 'react';
import { Picker, PickerItem, Cell } from 'tdesign-mobile-react';
import TDemoBlock from '../../../site/mobile/components/DemoBlock';

const formatOptions = (labels) => labels.map((label, index) => ({ label, value: index }));
const roles = formatOptions(['战士', '法师', '射手', '刺客', '坦克', '辅助']);
const heroes = [
  ['夏侯惇', '吕布', '铠', '狂铁', '李信', '哪吒', '杨戬', '关羽', '宫本武藏', '钟无艳', '亚瑟', '达摩', '老夫子'],
  [
    '安琪拉',
    '扁鹊',
    '不知火舞',
    '嫦娥',
    '妲己',
    '貂蝉',
    '干将莫邪',
    '高渐离',
    '姜子牙',
    '武则天',
    '米莱迪',
    '芈月',
    '墨子',
    '女娲',
    '沈梦溪',
    '王昭君',
    '小乔',
    '西施',
    '嬴政',
    '张良',
    '甄姬',
    '周瑜',
    '钟馗',
    '周瑜',
    '诸葛孔明',
  ],
  [
    '百里守约',
    '成吉思汗',
    '狄仁杰',
    '伽罗',
    '公孙离',
    '后裔',
    '黄忠',
    '李元芳',
    '小鲁班',
    '马克',
    '蒙犽',
    '孙尚香',
    '虞姬',
  ],
  [
    '马超',
    '上官婉儿',
    '云中君',
    '司马懿',
    '元歌',
    '裴擒虎',
    '百里玄策',
    '橘右京',
    '李白',
    '露娜',
    '兰陵王',
    '赵云',
    '阿轲',
    '花木兰',
    '孙悟空',
    '韩信',
  ],
  ['刘邦', '项羽', '庄周', '白起', '程咬金', '廉颇', '刘禅', '东皇'],
  ['蔡文姬', '瑶', '杨玉环', '盾山', '孙膑', '太乙真人', '大乔', '小明', '牛魔', '鬼谷子'],
].map(formatOptions);

export default function Demo() {
  const [visible, setVisible] = useState(false);
  const [values, setValues] = useState([0, 0]);
  const [selectedValues, setSelectedValues] = useState([]);
  const selectedText = useMemo(() => {
    const [roleIndex, heroeIndex] = selectedValues || [];
    return [roles[roleIndex]?.label, heroes[roleIndex] && heroes[roleIndex][heroeIndex]?.label]
      .filter(Boolean)
      .join('/');
  }, [selectedValues]);

  return (
    <TDemoBlock title="02 联动" summary="数据联动选择器">
      <Cell arrow title="英雄" note={selectedText || '选择英雄'} onClick={() => setVisible(true)} />
      <Picker
        value={values}
        onChange={(value, index) => {
          console.log(value, index);
          setValues(value);
        }}
        onConfirm={(value) => {
          setSelectedValues(value);
          setVisible(false);
        }}
        visible={visible}
      >
        <PickerItem options={roles} />
        <PickerItem options={heroes[values[0]]} />
      </Picker>
    </TDemoBlock>
  );
}
