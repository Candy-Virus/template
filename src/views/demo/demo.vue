<!--
 * @Description: <demo>
 * @Author: menggt
 * @Date: 2022-04-19 10:04:28
 * @LastEditors: menggt
 * @LastEditTime: 2022-05-14 15:05:44
-->
<template>
  <div class="charts-wrap">
    <div class="charts-box">
      <EChartsBox :options="option1(yyhQhfCallNum.treadData)" />
    </div>
    <div class="charts-box">
      <EChartsBox :options="option2(yyhQhfAverageFlow5G.treadData)" />
    </div>
    <div class="charts-box">
      <EChartsBox :options="option3(yyhAgsiFlowData.data[0].perfData)" />
    </div>
    <div class="charts-box">
      <EChartsBox :options="option4(yyhWifiFlowData.data[0].perfData)" />
    </div>
    <div class="charts-box">
      <EChartsBox :options="option5(yyhWifiFlowData.data[0].perfData)" />
    </div>
    <div class="bg-box">
      <div class="bg-box_item"></div>
      <div class="bg-box_item bg">
        <div class="value">96.33</div>
        <div class="unit">%</div>
        <div class="name">接通率</div>
      </div>
      <div class="bg-box_item">
        <img src="../../assets/img/circlebg-b.png">
        <div class="shadow"></div>
        <!-- <div class="value">0.02</div>
        <div class="unit">%</div>
        <div class="name">掉话率</div> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as $echarts from 'echarts'
import { dateFormat } from '@/utils/common'
// 话务量
const yyhQhfCallNum: any = {
  name: '话务量',
  callNum: { name: '当前', unit: 'erl', value: 1497, cycleTime: '2022-04-18 12:02:09' },
  callNumLast: { name: '昨日', unit: 'erl', value: 1531, cycleTime: '2022-04-18 12:02:09' },
  treadData: {
    name: '话务量变化趋势',
    unit: 'erl',
    cycleTime: '2022-04-18 12:02:09',
    data: [{ mpTime: '2022-04-18 11:05', mpValue: 1334 }, { mpTime: '2022-04-18 11:10', mpValue: 1769 }, { mpTime: '2022-04-18 11:15', mpValue: 1860 }, { mpTime: '2022-04-18 11:20', mpValue: 1684 }, { mpTime: '2022-04-18 11:25', mpValue: 1316 }, { mpTime: '2022-04-18 11:30', mpValue: 1260 }, { mpTime: '2022-04-18 11:35', mpValue: 1454 }, { mpTime: '2022-04-18 11:40', mpValue: 1222 }, { mpTime: '2022-04-18 11:45', mpValue: 1555 }, { mpTime: '2022-04-18 11:50', mpValue: 1883 }, { mpTime: '2022-04-18 11:55', mpValue: 1604 }, { mpTime: '2022-04-18 12:00', mpValue: 1229 }]
  }
}

// 5G日均流量
const yyhQhfAverageFlow5G: any = {
  name: '5G日均流量',
  flow: { name: '当前', unit: 'GB', value: '1540.11', cycleTime: '2022-04-18 12:02:09' },
  flowLast: { name: '昨日', unit: 'GB', value: '1763.96', cycleTime: '2022-04-18 12:02:09' },
  treadData: {
    name: '最近一周趋势',
    unit: 'GB',
    data: [{ mpTime: '2022-04-12', mpValue: '1848.49' }, { mpTime: '2022-04-13', mpValue: '1387.40' }, { mpTime: '2022-04-14', mpValue: '1494.05' }, { mpTime: '2022-04-15', mpValue: '1756.36' }, { mpTime: '2022-04-16', mpValue: '1212.40' }, { mpTime: '2022-04-17', mpValue: '1856.76' }, { mpTime: '2022-04-18', mpValue: '1644.66' }],
    count: 7,
    cycleTime: '2022-04-18 12:02:09'
  }
}

// AGIS流量监控
const yyhAgsiFlowData: any = {
  name: 'AGIS流量监控',
  data: [
    {
      areaId: '0',
      areaName: '全部场馆',
      outFlow: { name: '上行流量', unit: 'Mbps', cycleTime: '2022-04-18 11:00:30', value: '487.96' },
      inFlow: { name: '下行流量', unit: 'Mbps', cycleTime: '2022-04-18 11:00:30', value: '1205.99' },
      perfData: {
        outFlow: {
          name: '上行流量',
          unit: 'Mbps',
          value: '487.96',
          cycleTime: '2022-04-18 11:00:30',
          data: [{ mpValue: '105.31', mpTime: '2022-04-18 12:00' }, { mpValue: '105.65', mpTime: '2022-04-18 13:00' }, { mpValue: '142.52', mpTime: '2022-04-18 14:00' }, { mpValue: '132.11', mpTime: '2022-04-18 15:00' }, { mpValue: '139.60', mpTime: '2022-04-18 16:00' }, { mpValue: '138.90', mpTime: '2022-04-18 17:00' }, { mpValue: '123.89', mpTime: '2022-04-18 18:00' }, { mpValue: '118.30', mpTime: '2022-04-18 19:00' }, { mpValue: '124.46', mpTime: '2022-04-18 20:00' }, { mpValue: '138.04', mpTime: '2022-04-18 21:00' }, { mpValue: '119.57', mpTime: '2022-04-18 22:00' }]
        },
        inFlow: {
          name: '下行流量',
          unit: 'Mbps',
          value: '1205.99',
          cycleTime: '2022-04-18 11:00:30',
          data: [{ mpValue: '82.88', mpTime: '2022-04-18 12:00' }, { mpValue: '69.04', mpTime: '2022-04-18 13:00' }, { mpValue: '80.98', mpTime: '2022-04-18 14:00' }, { mpValue: '79.77', mpTime: '2022-04-18 15:00' }, { mpValue: '80.46', mpTime: '2022-04-18 16:00' }, { mpValue: '72.06', mpTime: '2022-04-18 17:00' }, { mpValue: '62.96', mpTime: '2022-04-18 18:00' }, { mpValue: '86.22', mpTime: '2022-04-18 19:00' }, { mpValue: '61.76', mpTime: '2022-04-18 20:00' }, { mpValue: '78.77', mpTime: '2022-04-18 21:00' }, { mpValue: '62.70', mpTime: '2022-04-18 22:00' }]
        }
      }
    }
  ]
}

// WIFI流量监控
const yyhWifiFlowData: any = {
  name: 'WIFI流量监控',
  data: [
    {
      areaId: '0',
      areaName: '全部场馆',
      outFlow: { name: '上行流量', unit: 'Mbps', cycleTime: '2022-04-18 11:00:30', value: '487.96' },
      inFlow: { name: '下行流量', unit: 'Mbps', cycleTime: '2022-04-18 11:00:30', value: '1205.99' },
      perfData: {
        outFlow: {
          name: '上行流量',
          unit: 'Mbps',
          value: '487.96',
          cycleTime: '2022-04-18 11:00:30',
          data: [{ mpValue: '105.31', mpTime: '2022-04-18 12:00' }, { mpValue: '105.65', mpTime: '2022-04-18 13:00' }, { mpValue: '142.52', mpTime: '2022-04-18 14:00' }, { mpValue: '132.11', mpTime: '2022-04-18 15:00' }, { mpValue: '139.60', mpTime: '2022-04-18 16:00' }, { mpValue: '138.90', mpTime: '2022-04-18 17:00' }, { mpValue: '123.89', mpTime: '2022-04-18 18:00' }, { mpValue: '118.30', mpTime: '2022-04-18 19:00' }, { mpValue: '124.46', mpTime: '2022-04-18 20:00' }, { mpValue: '138.04', mpTime: '2022-04-18 21:00' }, { mpValue: '119.57', mpTime: '2022-04-18 22:00' }]
        },
        inFlow: {
          name: '下行流量',
          unit: 'Mbps',
          value: '1205.99',
          cycleTime: '2022-04-18 11:00:30',
          data: [{ mpValue: '82.88', mpTime: '2022-04-18 12:00' }, { mpValue: '69.04', mpTime: '2022-04-18 13:00' }, { mpValue: '80.98', mpTime: '2022-04-18 14:00' }, { mpValue: '79.77', mpTime: '2022-04-18 15:00' }, { mpValue: '80.46', mpTime: '2022-04-18 16:00' }, { mpValue: '72.06', mpTime: '2022-04-18 17:00' }, { mpValue: '62.96', mpTime: '2022-04-18 18:00' }, { mpValue: '86.22', mpTime: '2022-04-18 19:00' }, { mpValue: '61.76', mpTime: '2022-04-18 20:00' }, { mpValue: '78.77', mpTime: '2022-04-18 21:00' }, { mpValue: '62.70', mpTime: '2022-04-18 22:00' }]
        }
      }
    }
  ]
}

const option1 = (data: any): object => {
  const xAxisList: string[] = []
  const yAxisList: string[] = []
  const unit: string = data.unit || ''
  const color: string[] = ['#817efe', '#abf6ff']

  if (data && data.data && data.data.length) {
    data.data.forEach((ele: any, index: number) => {
      xAxisList.push(ele.mpTime)
      yAxisList.push(ele.mpValue)
    })
  }

  return {
    color,
    title: {
      text: unit || '',
      textStyle: {
        color: '#666',
        fontSize: 14,
        fontWeight: 'normal'
      },
      padding: [5, 0, 0, 0]
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
        label: {
          backgroundColor: '#007bff'
        }
      },
      formatter: (params: any) => {
        // 获取xAxis data中的数据
        let dataStr = `<div><p style="font-size: 14px;">${params[0].name.split(' ')[1]}</p></div>`
        params.forEach((item: any) => {
          console.log('tooltip -item ------>', item)
          dataStr += `
            <div>
              <div>
                <span style="display: inline-block; width: 10px; height: 10px; border-radius: 5px; background-color: ${item.color.colorStops[0].color};"></span>
                <span style="font-size: 14px;">${item.seriesName}:</span>
                <span style="font-size: 14px; color: #f00; margin-left: 5px;">${item.data}${unit}</span>
              </div>
            </div>`
        })
        return dataStr
      }
    },
    legend: {
      icon: 'circle',
      right: '0%',
      top: '0%',
      itemWidth: 12,
      itemHeight: 12,
      textStyle: {
        fontSize: 14,
        color: '#fff'
      },
      data: ['话务量', '话务量']
    },
    grid: {
      left: 0,
      top: 40,
      bottom: 0,
      right: 10,
      containLabel: true
    },
    xAxis: {
      type: 'category',
      // 坐标文字
      gridIndex: 0,
      axisLabel: {
        color: '#95bab8',
        fontSize: 14,
        formatter: (params: any) => dateFormat('HH:MM', new Date(params))
      },
      // 坐标轴
      axisLine: {
        show: false
      },
      // 刻度
      axisTick: {
        show: false
      },
      data: xAxisList || []
    },
    yAxis: [
      {
        type: 'value',
        scale: false,
        splitNumber: 3,
        // 坐标文字
        axisLabel: {
          color: '#95bab8',
          fontSize: 14,
          formatter: (params: any) => params
        },
        // 坐标轴
        axisLine: {
          show: false
        },
        // 刻度
        axisTick: {
          show: false
        },
        // 分割线
        splitLine: {
          lineStyle: {
            type: 'solid',
            color: '#0e3038',
            opacity: 1
          }
        }
      }
    ],
    series: [
      {
        name: '话务量',
        type: 'line',
        symbol: 'none',
        // 平滑曲线
        smooth: true,
        showSymbol: false,
        itemStyle: {
          normal: {
            color: new $echarts.graphic.LinearGradient(0, 0, 1, 0, [
              {
                offset: 0,
                color: color[0]
              },
              {
                offset: 1,
                color: color[1]
              }]),
            shadowColor: color[0],
            shadowBlur: 10
          }
        },
        lineStyle: {
          shadowColor: color[0],
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          opacity: 1,
          type: 'solid',
          width: 2
        },
        data: yAxisList || []
      }
    ]
  }
}

const option2 = (data: any): object => {
  const xAxisList: string | number[] = []
  const yAxisList: string | number[] = []
  const unit: string = data.unit || ''
  const color: string[] = ['#ffae00', '#817efe']

  if (data && data.data && data.data.length) {
    data.data.forEach((ele: any, index: number) => {
      xAxisList.push(ele.mpTime)
      yAxisList.push(ele.mpValue)
    })
  }

  return {
    color,
    title: {
      text: unit || '',
      textStyle: {
        color: '#666',
        fontSize: 14,
        fontWeight: 'normal'
      },
      padding: [5, 0, 0, 0]
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
        label: {
          backgroundColor: '#007bff'
        }
      },
      formatter: (params: any) => {
        // 获取xAxis data中的数据
        let dataStr = `<div><p style="font-size: 14px;">${dateFormat('mm-dd', new Date(params[2].name))}</p></div>`
        dataStr += `
            <div>
              <div>
                <span style="display: inline-block; width: 10px; height: 10px; border-radius: 5px; background-color: ${params[2].color.colorStops[0].color};"></span>
                <span style="font-size: 14px;">${params[2].seriesName}:</span>
                <span style="font-size: 14px; color: #f00; margin-left: 5px;">${params[2].data}${unit}</span>
              </div>
            </div>`
        return dataStr
      }
    },
    grid: {
      top: 40,
      left: 0,
      bottom: 0,
      right: 10,
      containLabel: true
    },
    xAxis: {
      type: 'category',
      // 坐标文字
      gridIndex: 0,
      axisLabel: {
        color: '#95bab8',
        fontSize: 14,
        formatter: (params: any) => dateFormat('mm-dd', new Date(params))
      },
      // 坐标轴
      axisLine: {
        show: false
      },
      // 刻度
      axisTick: {
        show: false
      },
      data: xAxisList || []
    },
    yAxis: [
      {
        type: 'value',
        scale: false,
        splitNumber: 3,
        // 坐标文字
        axisLabel: {
          color: '#95bab8',
          fontSize: 14,
          formatter: (params: any) => params
        },
        // 坐标轴
        axisLine: {
          show: false
        },
        // 刻度
        axisTick: {
          show: false
        },
        // 分割线
        splitLine: {
          lineStyle: {
            type: 'solid',
            color: '#0e3038',
            opacity: 1
          }
        }
      }
    ],
    series: [
      {
        name: '上部圆',
        type: 'pictorialBar',
        silent: true,
        symbolSize: [16, 10],
        symbolOffset: [0, -6],
        symbolPosition: 'end',
        z: 12,
        color: '#ffe295',
        data: yAxisList || []
      },
      {
        name: '底部圆',
        type: 'pictorialBar',
        silent: true,
        symbolSize: [16, 10],
        symbolOffset: [0, 7],
        z: 12,
        color: '#495882',
        data: yAxisList || []
      },
      {
        name: '5G日均流量',
        type: 'bar',
        barWidth: '16',
        // Make series be overlap
        barGap: '10%',
        barCateGoryGap: '10%',
        itemStyle: {
          normal: {
            color: new $echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: '#ffae00'
              },
              {
                offset: 1,
                color: '#817efe'
              }
            ]),
            opacity: 0.8,
            shadowColor: 'rgba(255, 255, 255, 0.5)',
            shadowBlur: 15
          }
        },
        data: yAxisList || []
      }
    ]
  }
}

const option3 = (data: any): object => {
  const xAxisList: string | number[] = []
  const upYAxisList: string | number[] = []
  const downYAxisList: string | number[] = []
  const unit: string = data.outFlow.unit || ''
  const color: string[] = ['#00baff', '#92ffdf', '#246cff', '#79c2ff']

  if (data && data.outFlow && data.outFlow.data && data.outFlow.data.length) {
    data.outFlow.data.forEach((ele: any) => {
      xAxisList.push(ele.mpTime)
      upYAxisList.push(ele.mpValue)
    })
  }

  if (data && data.inFlow && data.inFlow.data && data.inFlow.data.length) {
    data.inFlow.data.forEach((ele: any) => {
      downYAxisList.push(ele.mpValue)
    })
  }

  return {
    color,
    title: {
      text: unit || '',
      textStyle: {
        color: '#666',
        fontSize: 14,
        fontWeight: 'normal'
      },
      padding: [5, 0, 0, 0]
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
        label: {
          backgroundColor: '#007bff'
        }
      },
      formatter: (params: any) => {
        // 获取xAxis data中的数据
        let dataStr = `<div><p style="font-size: 14px;">${params[0].name.split(' ')[1]}</p></div>`
        params.forEach((item: any) => {
          console.log('tooltip -item ------>', item)
          dataStr += `
            <div>
              <div>
                <span style="display: inline-block; width: 10px; height: 10px; border-radius: 5px; background-color: ${item.color.colorStops[0].color};"></span>
                <span style="font-size: 14px;">${item.seriesName}:</span>
                <span style="font-size: 14px; color: #f00; margin-left: 5px;">${item.data}${unit}</span>
              </div>
            </div>`
        })
        return dataStr
      }
    },
    legend: {
      icon: 'circle',
      right: '0%',
      top: '0%',
      itemWidth: 12,
      itemHeight: 12,
      textStyle: {
        fontSize: 14,
        color: '#fff'
      }
    },
    grid: {
      left: 0,
      top: 40,
      bottom: 0,
      right: 10,
      containLabel: true
    },
    xAxis: {
      type: 'category',
      // 坐标文字
      gridIndex: 0,
      axisLabel: {
        color: '#95bab8',
        fontSize: 14,
        formatter: (params: any) => dateFormat('HH:MM', new Date(params))
      },
      // 坐标轴
      axisLine: {
        show: false
      },
      // 刻度
      axisTick: {
        show: false
      },
      data: xAxisList || []
    },
    yAxis: [
      {
        type: 'value',
        scale: false,
        splitNumber: 3,
        // 坐标文字
        axisLabel: {
          color: '#95bab8',
          fontSize: 14,
          formatter: (params: any) => params
        },
        // 坐标轴
        axisLine: {
          show: false
        },
        // 刻度
        axisTick: {
          show: false
        },
        // 分割线
        splitLine: {
          lineStyle: {
            type: 'solid',
            color: '#0e3038',
            opacity: 1
          }
        }
      }
    ],
    series: [
      {
        name: '上行流量',
        type: 'line',
        symbol: 'none',
        // 平滑曲线
        smooth: true,
        showSymbol: false,
        itemStyle: {
          normal: {
            color: new $echarts.graphic.LinearGradient(0, 0, 1, 0, [
              {
                offset: 0,
                color: color[0]
              },
              {
                offset: 1,
                color: color[1]
              }]),
            shadowColor: color[0],
            shadowBlur: 10
          }
        },
        lineStyle: {
          shadowColor: color[0],
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          opacity: 1,
          type: 'solid',
          width: 2
        },
        data: upYAxisList || []
      },
      {
        name: '下行流量',
        type: 'line',
        symbol: 'none',
        // 平滑曲线
        smooth: true,
        showSymbol: false,
        itemStyle: {
          normal: {
            color: new $echarts.graphic.LinearGradient(0, 0, 1, 0, [
              {
                offset: 0,
                color: color[2]
              },
              {
                offset: 1,
                color: color[3]
              }]),
            shadowColor: color[2],
            shadowBlur: 10
          }
        },
        lineStyle: {
          shadowColor: color[2],
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          opacity: 1,
          type: 'solid',
          width: 2
        },
        data: downYAxisList || []
      }
    ]
  }
}

const option4 = (data: any): object => {
  const xAxisList: string | number[] = []
  const upYAxisList: string | number[] = []
  const downYAxisList: string | number[] = []
  const unit: string = data.outFlow.unit || ''
  const color: string[] = ['#00e4ff', '#9fffe3', '#ffc000', '#feffc8']

  if (data && data.outFlow && data.outFlow.data && data.outFlow.data.length) {
    data.outFlow.data.forEach((ele: any) => {
      xAxisList.push(ele.mpTime)
      upYAxisList.push(ele.mpValue)
    })
  }

  if (data && data.inFlow && data.inFlow.data && data.inFlow.data.length) {
    data.inFlow.data.forEach((ele: any) => {
      downYAxisList.push(ele.mpValue)
    })
  }

  return {
    color,
    title: {
      text: unit || '',
      textStyle: {
        color: '#666',
        fontSize: 14,
        fontWeight: 'normal'
      },
      padding: [5, 0, 0, 0]
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
        label: {
          backgroundColor: '#007bff'
        }
      },
      formatter: (params: any) => {
        // 获取xAxis data中的数据
        let dataStr = `<div><p style="font-size: 14px;">${params[0].name.split(' ')[1]}</p></div>`
        params.forEach((item: any) => {
          console.log('tooltip -item ------>', item)
          dataStr += `
            <div>
              <div>
                <span style="display: inline-block; width: 10px; height: 10px; border-radius: 5px; background-color: ${item.color.colorStops[0].color};"></span>
                <span style="font-size: 14px;">${item.seriesName}:</span>
                <span style="font-size: 14px; color: #f00; margin-left: 5px;">${item.data}${unit}</span>
              </div>
            </div>`
        })
        return dataStr
      }
    },
    legend: {
      icon: 'circle',
      right: '0%',
      top: '0%',
      itemWidth: 12,
      itemHeight: 12,
      textStyle: {
        fontSize: 14,
        color: '#fff'
      }
    },
    grid: {
      left: 0,
      top: 40,
      bottom: 0,
      right: 10,
      containLabel: true
    },
    xAxis: {
      type: 'category',
      // 坐标文字
      gridIndex: 0,
      axisLabel: {
        color: '#95bab8',
        fontSize: 14,
        formatter: (params: any) => dateFormat('HH:MM', new Date(params))
      },
      // 坐标轴
      axisLine: {
        show: false
      },
      // 刻度
      axisTick: {
        show: false
      },
      data: xAxisList || []
    },
    yAxis: [
      {
        type: 'value',
        scale: false,
        splitNumber: 3,
        // 坐标文字
        axisLabel: {
          color: '#95bab8',
          fontSize: 14,
          formatter: (params: any) => params
        },
        // 坐标轴
        axisLine: {
          show: false
        },
        // 刻度
        axisTick: {
          show: false
        },
        // 分割线
        splitLine: {
          lineStyle: {
            type: 'solid',
            color: '#0e3038',
            opacity: 1
          }
        }
      }
    ],
    series: [
      {
        name: '上行流量',
        type: 'line',
        symbol: 'none',
        // 平滑曲线
        smooth: true,
        showSymbol: false,
        itemStyle: {
          normal: {
            color: new $echarts.graphic.LinearGradient(0, 0, 1, 0, [
              {
                offset: 0,
                color: color[0]
              },
              {
                offset: 1,
                color: color[1]
              }]),
            shadowColor: color[0],
            shadowBlur: 10
          }
        },
        lineStyle: {
          shadowColor: color[0],
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          opacity: 1,
          type: 'solid',
          width: 2
        },
        data: upYAxisList || []
      },
      {
        name: '下行流量',
        type: 'line',
        symbol: 'none',
        // 平滑曲线
        smooth: true,
        showSymbol: false,
        itemStyle: {
          normal: {
            color: new $echarts.graphic.LinearGradient(0, 0, 1, 0, [
              {
                offset: 0,
                color: color[2]
              },
              {
                offset: 1,
                color: color[3]
              }]),
            shadowColor: color[2],
            shadowBlur: 10
          }
        },
        lineStyle: {
          shadowColor: color[2],
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          opacity: 1,
          type: 'solid',
          width: 2
        },
        data: downYAxisList || []
      }
    ]
  }
}

const option5 = (data: any): object => {
  return {
    title: {
      text: '{a|' + 100 + '}\n{c|' + '个' + '}',
      x: 'center',
      y: 'center',
      textStyle: {
        rich: {
          a: {
            fontSize: 24,
            fontWeight: 700,
            color: '#f3f'
          },
          c: {
            fontSize: 12,
            color: '#ff2fff'
          }
        }
      }
    },
    // 图形中间图片
    // graphic: {
    //   elements: [
    //     {
    //       type: 'image',
    //       style: {
    //       // 你的图片地址
    //         image: imgArr[0],
    //         width: 262,
    //         height: 262
    //       },
    //       left: 'center',
    //       top: 'center'
    //     }
    //   ]
    // },
    series: [
      {
        type: 'pie',
        zlevel: 1,
        silent: true,
        radius: ['34%', '38%'],
        hoverAnimation: false,
        color: '#8f39ff',
        label: {
          normal: {
            show: false
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: [1]
      },
      {
        type: 'gauge',
        splitNumber: 24,
        radius: '76%',
        axisLine: {
          lineStyle: {
            width: 38,
            color: [[1, '#2d2c8a']]
          }
        },
        pointer: {
          show: false,
          itemStyle: {
            color: 'auto'
          }
        },
        axisTick: {
          show: false
        },
        splitLine: {
          distance: -38,
          length: 38,
          lineStyle: {
            color: '#0a1e43',
            width: 3
          }
        },
        axisLabel: {
          show: false
        },
        title: {
          show: false
        },
        detail: {
          show: false
        },
        startAngle: 90,
        endAngle: -269.9999,
        data: [
          {
            value: 1,
            name: '5G流量'
          }
        ]
      },
      {
        type: 'pie',
        zlevel: 1,
        silent: true,
        radius: ['77%', '76%'],
        hoverAnimation: false,
        color: '#1f137d',
        label: {
          normal: {
            show: false
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: [1]
      },
      {
        type: 'gauge',
        splitNumber: 24,
        radius: '98%',
        axisLine: {
          lineStyle: {
            width: 10,
            color: [[1, '#2d2c8a']]
          }
        },
        pointer: {
          show: false,
          itemStyle: {
            color: 'auto'
          }
        },
        axisTick: {
          show: false
        },
        splitLine: {
          distance: -10,
          length: 10,
          lineStyle: {
            color: '#0a1e43',
            width: 3
          }
        },
        axisLabel: {
          show: false
        },
        title: {
          show: false
        },
        detail: {
          show: false
        },
        startAngle: 90,
        endAngle: -269.9999,
        data: [
          {
            value: 100,
            name: '5G流量'
          }
        ]
      }
    ]
  }
}
</script>

<style lang="scss" scoped>
.charts-wrap {
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #021e33;
  flex-wrap: wrap;

  .charts-box {
    display: flex;
    width: 470px;
    height: 247px;
    margin-right: 20px;
    /* background-image: linear-gradient(0deg, #817efe 0%,  #ffae00 100%), linear-gradient(#0263ff, #0263ff); */
    /* color: transparent; */
    /* background-color: #fff; */
    justify-content: space-between;
    align-items: center;
  }

  .bg-box {
    display: flex;
    width: 950px;
    height: 247px;
    justify-content: space-between;
    align-items: center;

    .bg-box_item {
      display: flex;
      position: relative;
      width: 33%;
      height: 100%;
      align-items: center;
      justify-content: center;
      overflow: hidden;

      img {
        position: absolute;
        /* left: 50%;
        top: 50%; */
        height: 130%;
        /* transform: translate(-50%, -50%); */
        object-fit: contain;
        animation: donut-spin 10s linear infinite;
      }

      .shadow {
        position: absolute;
        width: 50%;
        height: 20%;
        /* border: 1px solid red; */
        animation: revolving 4s 0s infinite;
        z-index: 2;
      }
    }

    /* .bg {
      display: flex;
      position: relative;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: url(../../assets/img/circlebg-b.png) no-repeat center;

      .value {
        margin-bottom: 5px;
        font-family: OPPOSans-M;
        font-size: 28px;
        font-weight: bold;
        font-stretch: normal;
        line-height: 26px;
        letter-spacing: 0px;
        color: #fff;
        text-shadow: 0 0 3px #1495ff,0 0 4px #1495ff,0 0 5px #1495ff,0 0 6px #1495ff;
      }

      .unit {
        font-family: OPPOSans-R;
        font-size: 20px;
        font-weight: bold;
        letter-spacing: 1px;
        color: #94b9b7;
        text-shadow: 0 0 1px #1495ff,0 0 2px #1495ff,0 0 3px #1495ff,0 0 4px #1495ff;
      }

      .name {
        position: absolute;
        bottom: 60px;
        font-family: OPPOSans-R;
        font-size: 20px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #a9aeaf;
      }
    } */
  }

  @keyframes donut-spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes revolving {

    0%,
    75% {
      filter: drop-shadow(0px 0px 10px #fff);
    }

    87.5% {
      filter: drop-shadow(0px 0px 10px #1495ff);
    }

    100% {
      filter: drop-shadow(0px 0px 10px #fff);
    }
  }
}
</style>
