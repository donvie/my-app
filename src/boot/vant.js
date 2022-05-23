import { boot } from 'quasar/wrappers'
import { Locale } from 'vant';
import enUS from 'vant/es/locale/lang/en-US';

Locale.use('en-US', enUS);
import {
  Button,
  Form,
  CellGroup,
  Field,
  Tabbar,
  TabbarItem,
  Grid,
  GridItem,
  Image,
  Empty,
  Switch,
  Uploader,
  Radio,
  RadioGroup,
  DatetimePicker,
  Calendar,
  Lazyload,
  NavBar,
  Cell,
  Icon,
  Card,
  Tag
} from 'vant'

export default boot(({ app }) => {
  app.use(Button)
  app.use(Form)
  app.use(CellGroup)
  app.use(Field)
  app.use(Tabbar)
  app.use(TabbarItem)
  app.use(Grid)
  app.use(GridItem)
  app.use(Image)
  app.use(Empty)
  app.use(Switch)
  app.use(Uploader)
  app.use(Radio)
  app.use(RadioGroup)
  app.use(DatetimePicker)
  app.use(Calendar)
  app.use(NavBar)
  app.use(Cell)
  app.use(Icon)
  app.use(Card)
  app.use(Tag)
  app.use(Lazyload, {
    lazyComponent: true,
  })
})
