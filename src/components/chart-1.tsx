import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import { px } from '../shared/px';
import {baseEchartOptions} from '../shared/base-echart-options';
import {createEchartsOptions} from '../shared/create-echarts-options';

export const Chart1 = () => {
  const divRef = useRef(null);
  const data =[10, 20, 36, 41, 15, 26, 37, 18, 29]
  const x =(data)=>{
    var myChart = echarts.init(divRef.current);
    myChart.setOption(createEchartsOptions({
      xAxis: {
        data: ['开发新区', '开发新区', '开发新区', '开发新区', '开发新区', '开发新区', '开发新区', '开发新区', '开发新区'],
        axisTick: {show: false},
        axisLine: {
          lineStyle: {color: '#083B70'}
        },
        axisLabel: {
          fontSize: px(12),
          formatter(val) {
            if (val.length > 2) {
              const array = val.split('');
              array.splice(2, 0, '\n');
              return array.join('');
            } else {
              return val;
            }
          }
        },
      },
      grid: {
        x: px(40),
        y: px(40),
        x2: px(40),
        y2: px(40),
      },
      yAxis: {
        splitLine: {show: false},
        axisLine: {
          show: true,
          lineStyle: {color: '#083B70'}
        },
        axisLabel: {
          fontSize: px(12)
        }
      },
      series: [{
        type: 'bar',
        data: data,
      }]
    }));}
  useEffect(() => {
    x(data)
  }, []);

  useEffect(()=>{
    setInterval(()=>{
      const newData = data.map(item=>{
        return item+Math.floor(Math.random()*50)
      })
      x(newData)
    },1000)
  },[])
  return (
    <div className="bordered 管辖统计">
      <h2>案发派出所管辖统计</h2>
      <div ref={divRef} className="chart">

      </div>
    </div>
  );
};