import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pab/p60/23414383.jpg?format=gallery-medium',
      name: 'Old Spice Wolfthorn ',
      description: ' Want to get rid of stale and antisocial odors to become a real leader of the pack? Old Spice mens deodorant stick is here to help - a wild aroma of real wolf self-confidence! The power of the most masculine aroma of the Old Spice Wolfthorn deodorant stick with notes of citrus and successful hunting will reveal the most predatory sides of your nature. With it, the reinforced concrete durability of the aroma for the whole day is guaranteed, as well as freshness for 48 hours. Wolfthorn deodorant with a blue stick of definition 50 ml is one solid featurea powerful formula without impact, which can remain with an avalanche of unpleasant odor and does not leave stains on the call, another unforgettable aroma with tart tropical notes, which will definitely not leave anyone indifferent within a radius of a couple of meters from you. Get an Old Spice boost – try Wolfthorn shower gel, then follow with deodorant from the same collection to keep you feeling wildly fresh all day long! ',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/old-spice-wolfthorn-dezodorant-dlja-muzhchin-50-ml-100213411/?c=750000000'
    },

    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb0/h49/86609944150046.jpg?format=gallery-medium',
      name: 'Farmstay сыворотка',
      description: 'Многофункциональная ампульная сыворотка с гиалуроновой кислотой и коллагеном FarmStay All In One Collagen and Hyaluronic Ampoule — великолепное средство для увлажнения и омоложения кожи. Лифтинг сыворотка интенсивно увлажняет и питает, нормализует гидробаланс, сохраняет и восстанавливает упругость и эластичность',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/farmstay-syvorotka-all-in-one-collagen-and-hyaluronic-acid-ampoule-anti-wrinkle-whitening-dlja-litsa-250-ml-100028087/?c=750000000'
    },

    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h26/ha2/84529770594334.jpg?format=gallery-medium',
      name: 'Фонокорректор Pro-Ject Phono Box DS2',
      description: '',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/pro-ject-phono-box-ds2-110743885/?c=750000000'
    },

    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h2e/h71/86918851887134.png?format=gallery-medium',
      name: 'Матрас T0970',
      description: 'Матрас-топпер ортопедический на диван или кровать защищает поверхность основного изделия от преждевременного износа, а также снизить механическое воздействие на него. Еще модель отличается компактностью: в случае необходимости топпер можно легко свернуть в рулон, убрать в шкаф или транспортировать в другое место. По краям специальные широкие резинки позволяют Топпер удобно его зафиксировать.',
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/matras-t0970-90x200x8-sm-chehol-tik-112567508/?c=750000000'
    },

    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h8c/hdb/83576119492638.jpg?format=gallery-medium',
      name: 'Мясорубка Artel ART-MG-5001',
      description: 'Ощутите превосходство инноваций на вашей кухне с мясорубкой ART-MG-5001. Это не просто устройство для измельчения мяса, это ваш верный помощник, который превратит готовку в увлекательное приключение. Новейшая электронная система Digital Protection обеспечивает надежную защиту мотора от перегрузок, гарантируя долгую и бесперебойную работу вашей мясорубки.',
      rating: 4.6,
      link: 'https://kaspi.kz/shop/p/artel-art-mg-5001-belyi-113158360/?c=750000000'
    },

    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha4/h62/64362055106590.jpg?format=gallery-medium',
      name: 'Графический планшет LCD',
      description: 'Графический планшет использует технологию LCD без подсветки, то есть на жидкокристаллическом экране остаются следы в местах нажатия на него.',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/lcd-gy-wt-8504-chernyi-103354496/?c=750000000'
    },

    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha0/h4b/63933635067934.jpg?format=gallery-medium',
      name: 'Патчи COSRX точечные',
      description: 'Долой прыщи. Средство экстренной помощи Acne Pimple Master Patch - приклеив патчи на ночь, уже утром Вы увидите результат их работы - прыщи станут менее заметны.',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/cosrx-tochechnye-acne-pimple-master-protivovospalitel-nye-24-sht-100368434/?c=750000000'
    },

    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h52/hb8/86377646194718.jpg?format=gallery-medium',
      name: 'Портативная колонка T&G',
      description: 'Портативная колонка обладает звучанием 2х5 Вт и мощным аккумулятором 1200 мАч. Корпус девайса сделан из высокопрочной ткани и прорезиненного пластика.',
      rating: 4.7,
      link: 'https://resources.cdn-kaspi.kz/img/m/p/h52/hb8/86377646194718.jpg?format=gallery-medium'
    },

    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h8f/hfc/63807893962782.jpg?format=gallery-medium',
      name: 'Мобильный телефон Nokia',
      description: 'Не ограничивайте себя в общении с Nokia 105 2019 DS. Для отображения информации телефон оснащен дисплеем с диагональю 1.77 дюймов и разрешением 128x160.',
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/nokia-105-2019-ds-chernyi-8801085/?c=750000000'
    },

    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pee/pfa/19567257.png?format=gallery-medium',
      name: 'Комплект посуды DS0003',
      description: '.',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/komplekt-posudy-ds0003-silikon-goluboi-106526923/?c=750000000'
    },
  ];
}
