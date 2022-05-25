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
  Tag,
  SubmitBar,
  CouponCell,
  CouponList,
  Popup,
  SwipeCell,
  Swipe,
  SwipeItem,
  Divider,
  Rate,
  ActionBar,
  ActionBarIcon,
  ActionBarButton,
  ContactCard,
  ContactEdit,
  NoticeBar
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
  app.use(SubmitBar)
  app.use(CouponCell)
  app.use(CouponList)
  app.use(Popup)
  app.use(SwipeCell)
  app.use(Swipe);
  app.use(SwipeItem);
  app.use(Divider);
  app.use(Rate);
  app.use(ActionBar);
  app.use(ActionBarIcon);
  app.use(ActionBarButton);
  app.use(ContactCard);
  app.use(ContactEdit);
  app.use(NoticeBar);
  app.use(Lazyload, {
    lazyComponent: true,
  })
})
