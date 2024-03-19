import * as Component from './styled'

import useVideo from './useVideo'

export default function Video() {
  const {
    videoRef,
    sliderRef,
    sliderVolumeRef,
    player,
    contentInteractive,
    visibleTimeOfMarked,
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
          src={contentInteractive.urlVideo}
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
          <Component.Time>
            {player.currentTime} / {player.durationFormated}
          </Component.Time>
          <Component.WrapSlider ref={sliderRef}>
            <Component.When is={!videoRef.current?.paused}>
              <Component.Slider
                min="0"
                max="100"
                step={0.5}
                value={player.progress}
                onChange={handleChangeProgress}
              />
            </Component.When>
            {contentInteractive.data?.map((item) => (
              <Component.MarkerSlider
                key={item.time}
                duration={player.duration}
                visibleTimeOfMarked={visibleTimeOfMarked}
                left={onMarkerBar(item.time)}
              >
                <Component.Marker type={item.type} status={item.status} />
              </Component.MarkerSlider>
            ))}
          </Component.WrapSlider>
          <Component.ButtonFullscreen />
        </Component.Controls>
      </Component.Wrap>
    </Component.Container>
  )
}
