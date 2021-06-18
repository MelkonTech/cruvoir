import {CSSProperties, useCallback, useState} from 'react'
import cn from 'classnames'
import {Icon} from 'components/common/Icon'
import ReactPlayer from 'react-player'
import styles from './index.css'

export function VideoPlayer(props: {
  className?: string
  isVideoAutoplayable?: boolean
  style?: CSSProperties
  videoUrl?: string
}) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(props.isVideoAutoplayable)
  const [isVideoMuted, setIsVideoMuted] = useState(props.isVideoAutoplayable)
  const toggleVideoPlaying = useCallback(() => setIsVideoPlaying(!isVideoPlaying), [isVideoPlaying])

  const toggleVideoMuted = useCallback(e => {
    e.stopPropagation()
    setIsVideoMuted(!isVideoMuted)
  }, [isVideoMuted])

  return <div
    className={cn(styles.videoPlayer, `state--${isVideoPlaying ? 'pause' : 'play'}`, props.className)}
    onClick={toggleVideoPlaying}
    style={props.style}
  >
    <ReactPlayer
      className="video"
      height='100%'
      loop
      muted={isVideoMuted}
      playing={isVideoPlaying}
      url={props.videoUrl}
      volume={isVideoMuted ? 0 : 1}
      width='100%'
    />

    <div className={cn('play-button', `state--${isVideoPlaying ? 'pause' : 'play'}`)} />

    <div className={cn('mute-button', {'is-muted': isVideoMuted})} onClick={toggleVideoMuted}>
      <Icon className="icon" name="speaker" />
    </div>
  </div>
}
