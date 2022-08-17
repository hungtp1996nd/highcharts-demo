import React, { useEffect, useMemo, useState } from 'react'
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'
import { Serie } from '../types/Campain';
import request from '../apis/request';

interface CampaignChartProps {
  title: string;
  categories: string[]
}

const CampaignChart = ({ title, categories }: CampaignChartProps) => {

  const [series, setSeries] = useState<Serie[]>([])

  useEffect(() => {
    const fetchSeries = async () => {
      const response = await request.get('/campains')
      const data = await response.data
      setSeries(data)
    }
    fetchSeries()
  }, [])

  const options = useMemo(() => ({
    title: {
      text: title
    },
    xAxis: {
      categories,
    },
    labels: {
      items: [{
        html: 'Total fruit consumption',
        style: {
          left: '50px',
          top: '18px',
          color: 'black'
        }
      }]
    },
    series,
  }), [title, categories, series])

  return (
    <>
      <HighchartsReact 
        highcharts={Highcharts}
        options={options}
      />
    </>
  
  )
}

export default CampaignChart