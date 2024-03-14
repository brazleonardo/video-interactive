import * as Component from './styled'

import src from '@/assets/aula.mp4'

import useVideo from './useVideo'

function Video() {
  const {
    videoRef,
    sliderRef,
    sliderVolumeRef,
    player,
    contentInteractive,
    onLoadedMetadata,
    onTimeUpdate,
    onVolumeChange,
    onPlay,
    onPause,
    onEnded,
    onMarkerBar,
    handleTogglePlay,
    handleChangeProgress,
    handleChangeVolume,
  } = useVideo()

  return (
    <Component.Container>
      <Component.Wrap
        $hasInteractive={
          !!contentInteractive.current &&
          !contentInteractive.closeContentInteractive
        }
      >
        <Component.Video
          ref={videoRef}
          controlsList="nodownload noremoteplayback"
          onLoadedMetadata={onLoadedMetadata}
          onPlay={onPlay}
          onPause={onPause}
          onTimeUpdate={onTimeUpdate}
          onVolumeChange={onVolumeChange}
          onEnded={onEnded}
          src={src}
        />
        <Component.InteractiveContent data={contentInteractive.current} />
        <Component.Controls>
          <Component.ButtonIcon onClick={handleTogglePlay}>
            <Component.When is={!player.isPlaying}>
              <Component.FaPlay />
            </Component.When>
            <Component.When is={player.isPlaying}>
              <Component.FaPause />
            </Component.When>
          </Component.ButtonIcon>
          <Component.Time>
            {player.currentTime} / {player.duration}
          </Component.Time>
          <Component.WrapSlider ref={sliderRef}>
            <Component.When is={!videoRef.current?.paused}>
              <Component.Slider
                min="0"
                max="100"
                value={player.progress}
                onChange={handleChangeProgress}
              />
            </Component.When>
            {contentInteractive.data?.map((item) => (
              <Component.MarkerSlider
                key={item.time}
                left={onMarkerBar(item.time)}
              >
                <Component.Marker
                  type={item.type}
                  status={item.status}
                  time={item.time}
                />
              </Component.MarkerSlider>
            ))}
          </Component.WrapSlider>
          <Component.WrapVolume>
            <Component.ButtonIcon>
              <Component.VolumeIcon value={player.volume} />
            </Component.ButtonIcon>
            <Component.Slider
              ref={sliderVolumeRef}
              min={0}
              max={1}
              value={player.volume}
              step={0.25}
              onChange={handleChangeVolume}
            />
          </Component.WrapVolume>
        </Component.Controls>
      </Component.Wrap>
    </Component.Container>
  )
}

export default Video
