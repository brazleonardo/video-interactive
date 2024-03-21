import * as Component from './styled'

import useAttachment from './useAttachment'

interface Props {
  src: string
}

const Attachment = ({ src }: Props) => {
  const {
    videoRef,
    sliderRef,
    sliderVolumeRef,
    player,
    contentInteractiveRegister,
    onLoadedMetadata,
    onTimeUpdate,
    onVolumeChange,
    onPlay,
    onPause,
    onMarkerBar,
    handleTogglePlay,
    handleChangeProgress,
    handleChangeVolume,
    handleOpenModalContent,
    handleOpenModalConfirm,
  } = useAttachment()

  return (
    <Component.Container>
      <Component.Wrap>
        <Component.Video
          ref={videoRef}
          controlsList="nodownload noremoteplayback"
          onContextMenu={(e) => e.preventDefault()}
          onLoadedMetadata={onLoadedMetadata}
          onPlay={onPlay}
          onPause={onPause}
          onTimeUpdate={onTimeUpdate}
          onVolumeChange={onVolumeChange}
          src={src}
        />
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
            {player.currentTime} / {player.durationFormated}
          </Component.Time>
          <Component.WrapSlider ref={sliderRef}>
            <Component.Slider
              min="0"
              max="100"
              step={0.5}
              value={player.progress}
              onChange={handleChangeProgress}
            />
            {contentInteractiveRegister.data?.map((item) => (
              <Component.MarkerSlider
                key={item.time}
                left={onMarkerBar(item.time)}
              >
                <Component.Marker
                  type={item.type}
                  status={'viewed'}
                  hasClick
                  onClick={() => handleOpenModalContent(item.time)}
                />
                <Component.MenuOptions>
                  <Component.ItemButton
                    type="button"
                    onClick={() => handleOpenModalContent(item.time)}
                  >
                    Editar
                  </Component.ItemButton>
                  <Component.ItemButton
                    type="button"
                    onClick={() => handleOpenModalConfirm(item.time)}
                  >
                    Deletar
                  </Component.ItemButton>
                </Component.MenuOptions>
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

export default Attachment
