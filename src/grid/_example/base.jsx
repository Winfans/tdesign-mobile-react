import React from 'react';
import { Grid, GridItem, Image } from 'tdesign-mobile-react';
import TDemoBlock from '../../../site/mobile/components/DemoBlock';
import TDemoHeader from '../../../site/mobile/components/DemoHeader';
import './style/index.less'

const imgUrl = 'https://tdesign.gtimg.com/mobile/%E5%9B%BE%E7%89%87.png'

export default function Base() {
  return (
    <div className='tdesign-mobile-demo'>
      <TDemoHeader title="Grid 宫格" summary="横向分割的点击单元，用作一组次级功能的入口"/>
      <TDemoBlock title="01 类型" summary="一行三个（border）">
        <div className='tdesign-grid-base'>
          <Grid gutter={0} column={3} border={true}>
            <GridItem
              image={<Image className='img-3 img-vertical' src={imgUrl}/>}
              text={<div className='text-3'>标题文字</div>}
            />
            <GridItem
              image={<Image className='img-3 img-vertical' src={imgUrl}/>}
              text={<div className='text-3'>标题文字</div>}
            />
            <GridItem
              image={<Image className='img-3 img-vertical' src={imgUrl}/>}
              text={<div className='text-3'>标题文字</div>}
            />
          </Grid>
        </div>
      </TDemoBlock>
      <TDemoBlock title="" summary="一行四个">
        <Grid gutter={0}>
          <GridItem 
            image={imgUrl}
            text={<div className='text-4'>标题文字</div>}
          />
          <GridItem
            image={imgUrl}
            text={<div className='text-4'>标题文字</div>}
          />
          <GridItem
            image={imgUrl}
            text={<div className='text-4'>标题文字</div>}
          />
          <GridItem
            image={imgUrl}
            text={<div className='text-4'>标题文字</div>}
          />
        </Grid>
      </TDemoBlock>
      <TDemoBlock title="" summary="一行五个">
        <Grid gutter={0} column={5}>
          <GridItem
            image={<Image className='img-5 img-vertical' src={imgUrl}/>}
            text={<div className='text-4'>标题文字</div>}
          />
          <GridItem
            image={<Image className='img-5 img-vertical' src={imgUrl}/>}
            text={<div className='text-4'>标题文字</div>}
          />
          <GridItem 
            image={<Image className='img-5 img-vertical' src={imgUrl}/>}
            text={<div className='text-4'>标题文字</div>}
          />
          <GridItem
            image={<Image className='img-5 img-vertical' src={imgUrl}/>}
            text={<div className='text-4'>标题文字</div>}
          />
          <GridItem
            image={<Image className='img-5 img-vertical' src={imgUrl}/>}
            text={<div className='text-4'>标题文字</div>}
          />
        </Grid>
        <div className='tdesign-grid-5-horizontal'>
          <Grid gutter={0} column={5}>
            <GridItem
              image={<Image className='img-5 img-vertical' src={imgUrl}/>}
              text={<div className='text-4'>标题文字</div>}
            />
            <GridItem
              image={<Image className='img-5 img-vertical' src={imgUrl}/>}
              text={<div className='text-4'>标题文字</div>}
            />
            <GridItem
              image={<Image className='img-5 img-vertical' src={imgUrl}/>}
              text={<div className='text-4'>标题文字</div>}
            />
            <GridItem
              image={<Image className='img-5 img-vertical' src={imgUrl}/>}
              text={<div className='text-4'>标题文字</div>}
            />
            <GridItem
              image={<Image className='img-5 img-vertical' src={imgUrl}/>}
              text={<div className='text-4'>标题文字</div>}
            />
          </Grid>
        </div>
      </TDemoBlock>
      <TDemoBlock title="" summary="一行两个带说明宫格">
        <Grid gutter={0} column={2} align="left">
          <GridItem 
            description="说明文字" 
            layout="horizontal" 
            image={<Image className='img-2 img-horizontal' src={imgUrl}/>}
            text={<div className='text-2'>标题文字</div>}
          />
          <GridItem 
            description="说明文字" 
            layout="horizontal" 
            image={<Image className='img-2 img-horizontal' src={imgUrl}/>}
            text={<div className='text-2'>标题文字</div>}
          />
        </Grid>
      </TDemoBlock>
      <TDemoBlock title="" summary="一行三个带说明宫格">
        <Grid gutter={0} column={3}>
          <GridItem 
            description="说明文字" 
            image={<Image className='img-3 img-vertical' src={imgUrl}/>}
            text={<div className='text-3'>标题文字</div>}
          />
          <GridItem 
            description="说明文字" 
            image={<Image className='img-3 img-vertical' src={imgUrl}/>}
            text={<div className='text-3'>标题文字</div>}
          />
          <GridItem 
            description="说明文字" 
            image={<Image className='img-3 img-vertical' src={imgUrl}/>}
            text={<div className='text-3'>标题文字</div>}
          />
        </Grid>
      </TDemoBlock>
      <TDemoBlock title="" summary="带徽标宫格">
        <Grid gutter={0}>
          <GridItem 
            badgeProps={{
                dot: true,
            }}
            image={<Image className='img-4 img-vertical' src={imgUrl}/>}
            text={<div className='text-4'>标题文字</div>}
          />
          <GridItem
            badgeProps={{
                count: 8,
            }}
            image={<Image className='img-4 img-vertical' src={imgUrl}/>}
            text={<div className='text-4'>标题文字</div>}
          />
          <GridItem
            badgeProps={{
                count: 'new'
            }}
            image={<Image className='img-4 img-vertical' src={imgUrl}/>}
            text={<div className='text-4'>标题文字</div>}
          />
          <GridItem
            badgeProps={{
                count: '···'
            }}
            image={<Image className='img-4 img-vertical' src={imgUrl}/>}
            text={<div className='text-4'>标题文字</div>}
          />
        </Grid>
      </TDemoBlock>
    </div>
  );
}
