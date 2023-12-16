import { UserConfig, defineConfig, presetIcons, presetUno } from 'unocss'

const unocssConfig: UserConfig = defineConfig({
  presets: [
    presetUno({
      dark: 'media',
    }),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
      },
    }),
  ],
})

export default unocssConfig
