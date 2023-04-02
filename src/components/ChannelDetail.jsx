import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Stack, Box } from '@mui/material'

import { VideoCard, ChannelCard } from './'

const ChannelDetail = () => {
  const { channelId } = useParams()
  return (
    <div>
      {channelId}
    </div>
  )
}

export default ChannelDetail
