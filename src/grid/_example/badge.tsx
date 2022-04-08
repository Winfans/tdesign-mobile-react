import React from 'react';
import { Grid, GridItem, Image } from 'tdesign-mobile-react';

const imgUrl = 'https://tdesign.gtimg.com/mobile/%E5%9B%BE%E7%89%87.png'

export default function () {
  return <>
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
  </>
}
