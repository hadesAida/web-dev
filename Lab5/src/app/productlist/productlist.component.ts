import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../productitem/productitem.component';
import { ProductItem } from '../productitem';


@Component({
  selector: 'app-products',
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductsComponent {
  @Input() selectedCategory: string = 'All';
  productItemList: ProductItem[] = [
    {
      id: 1,
      name: 'Apple MacBook Air 13 2022',
      images: ['assets/products/1.jpg', 'assets/products/1_1.jpg', 'assets/products/1_2.jpg', 'assets/products/1_3.jpg'],
      description: 'The 2022 MacBook Air is one of the biggest updates to the lineup ever, with a completely new look, a newer and more powerful M2 processor, an improved webcam, quad surround speakers, a MagSafe 3 port, and a newer keyboard, all while weighing just 1,240 grams and still featuring the same premium aluminum chassis.',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mly13-105933751/?c=750000000',
      category: 'Laptops',
      likes: 0
    },
    {
      id: 2,
      name: 'Laptop stand 2Bro_Workshop',
      images: ['assets/products/2.jpg', 'assets/products/2_1.jpg'],
      description: 'Stand is the perfect solution for anyone looking to create a comfortable and functional work or study area. Made from quality materials, this stand will not only improve your position when working with a laptop, but will also add elegance to your workspace. It features an adjustable tilt angle, allowing you to adjust your viewing angle and minimize eye strain. Lightweight and easy to use, the 2 o Tseh stand will be an indispensable assistant in any study or work situation.',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/2bro-tseh-128868821/?c=750000000',
      category: 'Laptop stands',
      likes: 0
    },
    {
      id: 3,
      name: 'Mouse VXE R1 SE+ white',
      images: ['assets/products/3.jpg', 'assets/products/3_1.jpg', 'assets/products/3_2.jpg'],
      description: 'Introducing the VXE Dragonfly R1 SE+ wireless gaming mouse, the pinnacle of high-performance gaming. With a flagship-class optical sensor, youll experience precision and reliability like never before. Enjoy ultra-low latency and impressive 2K return speed for fast, responsive gaming.',
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/vxe-r1-se-belyi-116672218/?c=750000000',
      category: 'Mouses',
      likes: 0
    },
    {
      id: 4,
      name: 'Laptop Acer Gadget E10 ETBook 14',
      images: ['assets/products/4.jpg', 'assets/products/4_1.jpg', 'assets/products/4_2.jpg', 'assets/products/4_3.jpg'],
      description: '',
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/acer-gadget-e10-etbook-14-16-gb-ssd-512-gb-win-11-home-0167563995-121895857/?c=750000000',
      category: 'Laptops',
      likes: 0
    },
    {
      id: 5,
      name: 'Laptop stand CROWN CMLS-403',
      images: ['assets/products/5.jpg', 'assets/products/5_1.jpg', 'assets/products/5_2.jpg', 'assets/products/5_3.jpg'],
      description: 'The Crown laptop stand is an accessory that will be an excellent choice for those who work on a laptop for a long time and need its effective cooling. This model is highly efficient and fully compatible with devices with a screen diagonal of up to 17".',
      rating: 4.6,
      link: 'https://kaspi.kz/shop/p/crown-cmls-403-101900346/?c=750000000',
      category: 'Laptop stands',
      likes: 0
    },
    {
      id: 6,
      name: 'Laptop Stand Ugreen LP451 40289',
      images: ['assets/products/6.jpg', 'assets/products/6_1.jpg', 'assets/products/6_2.jpg', 'assets/products/6_3.jpg'],
      description: 'The universal stand is designed for convenient placement of the laptop on the desktop. The stand folds and is very convenient for daily use. The laptop is fixed in the lower position with the help of two clamps located on the front part of the stand. This system allows unimpeded access to the laptop connectors along the entire perimeter. The angle of the stand is adjustable in the range of 0 - 45 degrees and allows you to fix the laptop in a comfortable position.',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/ugreen-lp451-40289-112624154/?c=750000000',
      category: 'Laptop stands',
      likes: 0
    },
    {
      id: 7,
      name: 'Keyboard X-Game XK-200UB black',
      images: ['assets/products/7.jpg', 'assets/products/7_1.jpeg', 'assets/products/7_2.jpg', 'assets/products/7_3.jpg'],
      description: 'A bright keyboard with LED backlighting will become a stylish element of a gaming desk. The device is not afraid of accidental liquid spills on the surface, so fully immerse yourself in the game and do not worry that a drink will spill on the keyboard during heated battles. The symbols on the keys are laser engraved in three languages ​​and are protected by a UV coating from erasing, and thanks to the rubber feet, the keyboard is securely held on the table surface.',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/x-game-xk-200ub-chernyi-9200601/?c=750000000',
      category: 'Keyboards',
      likes: 0
    },
    {
      id: 8,
      name: 'Laptop Stand 2E GAMING 2E-CPG-004',
      images: ['assets/products/8.jpg', 'assets/products/8_1.jpg', 'assets/products/8_2.jpg', 'assets/products/8_3.jpg'],
      description: 'The 2E Gaming CPG-004 gaming stand is designed to provide absolute comfort and maintain the optimal temperature of the laptop during work and games.',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/2e-gaming-2e-cpg-004-101700559/?c=750000000',
      category: 'Laptop stands',
      likes: 0
    },
    {
      id: 9,
      name: 'Laptop ThundeRobot Zero G3 Ultra 16"',
      images: ['assets/products/9.jpg', 'assets/products/9_1.jpg', 'assets/products/9_2.jpg', 'assets/products/9_3.jpg'],
      description: 'The Thunderobot Zero G3 Ultra gaming laptop is a model in a plastic and metal case, equipped with a 24-core Intel Core i9-13900HX processor with a clock speed of 2.2 GHz, increasing to 5.4 GHz, and a 12 GB GeForce RTX 4080 graphics card from Nvidia. Due to this, you can run demanding games, work simultaneously in several programs and resource-intensive applications without losing performance. The device comes with a pre-installed Windows 11 OS. The RAM has a capacity of 32 GB.',
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/thunderobot-zero-g3-ultra-16-32-gb-ssd-2048-gb-win-11--114123805/?c=750000000',
      category: 'Laptops',
      likes: 0
    },
    {
      id: 10,
      name: 'Mouse Razer DeathAdder Essential RZ01-03850200-R3M1 white',
      images: ['assets/products/10.jpg', 'assets/products/10_1.jpg', 'assets/products/10_2.jpg', 'assets/products/10_3.jpg'],
      description: 'The Razer DeathAdder Essential wired mouse white [RZ01-03850200-R3M1] is a comfortable gaming model with a slightly curved shape. The body is designed for right-hand grip and reduces unnecessary stress on the wrist. The durable design can withstand 10 million clicks, which is important for fans of frequent and long gaming sessions.',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/razer-deathadder-essential-rz01-03850200-r3m1-belyi-102016622/?c=750000000',
      category: 'Mouses',
      likes: 0
    },
    {
      id: 11,
      name: 'Keyboard AULA F75 Side-Printed black',
      images: ['assets/products/11.jpg', 'assets/products/11_1.jpg', 'assets/products/11_2.jpeg', 'assets/products/11_3.jpg'],
      description: 'Aula optimized keyboards compact design allows for greater space efficiency. With a 75% compact design, the F75 fits all the keys you need into one compact design, taking up less space, making it ideal for compact desktops and mobile setups without compromising on functionality.',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/aula-f75-side-printed-chernyi-120134580/?c=750000000',
      category: 'Keyboards',
      likes: 0
    },
    {
      id: 12,
      name: 'Inova Death Life Mouse Pad',
      images: ['assets/products/12.jpg'],
      description: 'This is a convenient accessory that provides smooth and precise mouse movement. The surface is designed for comfortable work, supporting both optical and laser mice. A variety of sizes, materials and designs allows you to choose the right option for your home, office or gaming space. A practical solution for improving the accuracy and comfort of working on a computer.',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/inova-death-life-115283473/?c=750000000',
      category: 'Mouse pads',
      likes: 0
    },
    {
      id: 13,
      name: 'Toro II Mouse Pad',
      images: ['assets/products/13.jpg'],
      description: 'This is a convenient accessory that provides smooth and precise mouse movement. The surface is designed for comfortable work, supporting both optical and laser mice. A variety of sizes, materials and designs allows you to choose the right option for your home, office or gaming space. A practical solution for improving the accuracy and comfort of working on a computer. ',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/toro-ii-113942342/?c=750000000',
      category: 'Mouse pads',
      likes: 0
    },
    {
      id: 14,
      name: 'Mouse pad world map drawing',
      images: ['assets/products/14.jpg', 'assets/products/14_1.jpg', 'assets/products/14_2.jpg'],
      description: 'The "World Map" mouse pad can be a great gift for a gamer or for a person who works a lot on the computer. The large mouse pad will fit both a mouse and a keyboard or a laptop. The edges of the pad are covered with fabric, which means that the pad (unlike regular ones) will last a long time.',
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/karta-mira-risunok-101998369/?c=750000000',
      category: 'Mouse pads',
      likes: 0
    },
    {
      id: 15,
      name: 'Bag Portcase 9011 black',
      images: ['assets/products/15.jpg', 'assets/products/15_1.jpg', 'assets/products/15_2.jpg', 'assets/products/15_3.jpg'],
      description: 'Designed for easy carrying and protection of your device. Elegant design and functionality allow you to use them both in everyday life and in a business setting. Internal compartments and soft lining help protect your laptop from damage, and additional pockets are suitable for storing accessories and documents. A practical solution for comfortable and safe use of your device.',
      rating: 4.3,
      link: 'https://kaspi.kz/shop/p/sumka-portcase-9011-chernyi-108895248/?c=750000000',
      category: 'Laptop bags',
      likes: 0
    },
    {
      id: 16,
      name: 'QINNXER Mei Tian Mei Bag Beige',
      images: ['assets/products/16.jpg', 'assets/products/16_1.jpg', 'assets/products/16_2.jpg', 'assets/products/16_3.jpg'],
      description: 'Designed for easy carrying and protection of your device. Elegant design and functionality allow you to use them both in everyday life and in a business setting. Internal compartments and soft lining help protect your laptop from damage, and additional pockets are suitable for storing accessories and documents. A practical solution for comfortable and safe use of your device.',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/sumka-qinnxer-mei-tian-mei-bezhevyi-109122355/?c=750000000',
      category: 'Laptop bags',
      likes: 0
    }
    ];

  get filteredProducts(): ProductItem[] {
    if(this.selectedCategory === 'All'){
      return this.productItemList;
    }
    return this.productItemList.filter(p => p.category === this.selectedCategory);
  }
  

  removeProductItem(productToRemove: ProductItem){
    this.productItemList = this.productItemList.filter(p => p !== productToRemove);
  }


 
}
