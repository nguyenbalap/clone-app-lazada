/* eslint-disable prettier/prettier */
import {useEffect, useState} from 'react';
import {FETCH_REQUEST_PRODUCTS, FETCH_SUCCESS_PRODUCTS} from './ProductAction';
const INITIAL_STATE = {
  products: [
    {
      productId: 0,
      imgUris: [
        'https://cf.shopee.vn/file/c4e48c19c4c61276363adc3bd3a13f48_tn',
        'https://cf.shopee.vn/file/0afae0cfa0fc7be75235e0fed914b6b3',
        'https://cf.shopee.vn/file/f610d90d45ee417bb6523a0bb67fdc9f',
      ],
      price: '149.000đ',
      sale: '89.000đ',
      solve: 12,
      count: 20,
      description:
        'Áo hoodie form rộng WIND unisex nỉ bông STAY HD11 thời trang nam nữ oversize ulzzang',
      vouchers: ['Giảm 20%', 'Giảm 3K', 'Giảm 5K', 'Giảm 15%', 'Giảm 5%'],
      total: 0,
    },
    {
      productId: 1,
      imgUris: [
        'https://vn-live-05.slatic.net/p/a13bd65f404d43104138f64c313128a7.jpg_720x720q80.jpg_.webp',
        'https://cf.shopee.vn/file/0b8f9fe8df7e3d34cb7b4bead98221d4',
        'https://cf.shopee.vn/file/34182409c379b6a197bd9e72f53ad566',
      ],
      price: '289.000đ',
      sale: '169.000đ',
      solve: 75,
      count: 100,
      description:
        'Áo Len Nam Cổ Lọ SUKIYA Chất Len mềm mịn kiểu dáng Hàn Quốc AL14',
      vouchers: ['Giảm 50%', 'Giảm 8K'],
      total: 0,
    },
    {
      productId: 2,
      imgUris: [
        'https://vn-live-05.slatic.net/p/036fc77d503381248e70de541a439064.jpg_200x200q90.jpg_.webp',
        'https://cf.shopee.vn/file/3e57768ec683d20347866ce019c06448',
        'https://cf.shopee.vn/file/098d4d5cc83da9db07833577475d22b9',
      ],
      price: '59.000đ',
      sale: '36.500đ',
      solve: 56,
      count: 60,
      description:
        'Túi đeo chéo nam nữ phong cách Hàn 🦋phụ kiện thời trang🦋túi đeo chéo deja, misout unisex ulzzang kèm video',
      vouchers: ['Giảm 10%', 'Giảm 3K'],
      total: 0,
    },
    {
      productId: 3,
      imgUris: [
        'https://vn-test-11.slatic.net/p/89f3a32d0056bf2928df7a28bce134b6.jpg_200x200Q100.jpg_.webp',
        'https://cf.shopee.vn/file/70b1bf16d31068fc3ccaa6acbf6017bd',
        'https://cf.shopee.vn/file/2cbf99eb5f52a600cd5af9d74545cee1',
      ],
      price: '559.000đ',
      sale: '236.500đ',
      solve: 1360,
      count: 1500,
      description:
        'Áo hoodie Essentials nỉ bông dày dặn kèm ảnh thật POCAHOUSE Áo hoodie nam nữ nỉ bông TED12',
      vouchers: ['Giảm 10%', 'Giảm 3K'],
      total: 0,
    },
  ],
};
const products = [
  {
    productId: 0,
    imgUris: [
      'https://cf.shopee.vn/file/c4e48c19c4c61276363adc3bd3a13f48_tn',
      'https://cf.shopee.vn/file/0afae0cfa0fc7be75235e0fed914b6b3',
      'https://cf.shopee.vn/file/f610d90d45ee417bb6523a0bb67fdc9f',
    ],
    price: '149.000đ',
    sale: '89.000đ',
    solve: 12,
    count: 20,
    description:
      'Áo hoodie form rộng WIND unisex nỉ bông STAY HD11 thời trang nam nữ oversize ulzzang',
    vouchers: ['Giảm 20%', 'Giảm 3K', 'Giảm 5K', 'Giảm 15%', 'Giảm 5%'],
    total: 0,
  },
  {
    productId: 1,
    imgUris: [
      'https://vn-live-05.slatic.net/p/a13bd65f404d43104138f64c313128a7.jpg_720x720q80.jpg_.webp',
      'https://cf.shopee.vn/file/0b8f9fe8df7e3d34cb7b4bead98221d4',
      'https://cf.shopee.vn/file/34182409c379b6a197bd9e72f53ad566',
    ],
    price: '289.000đ',
    sale: '169.000đ',
    solve: 75,
    count: 100,
    description:
      'Áo Len Nam Cổ Lọ SUKIYA Chất Len mềm mịn kiểu dáng Hàn Quốc AL14',
    vouchers: ['Giảm 50%', 'Giảm 8K'],
    total: 0,
  },
  {
    productId: 2,
    imgUris: [
      'https://vn-live-05.slatic.net/p/036fc77d503381248e70de541a439064.jpg_200x200q90.jpg_.webp',
      'https://cf.shopee.vn/file/3e57768ec683d20347866ce019c06448',
      'https://cf.shopee.vn/file/098d4d5cc83da9db07833577475d22b9',
    ],
    price: '59.000đ',
    sale: '36.500đ',
    solve: 56,
    count: 60,
    description:
      'Túi đeo chéo nam nữ phong cách Hàn 🦋phụ kiện thời trang🦋túi đeo chéo deja, misout unisex ulzzang kèm video',
    vouchers: ['Giảm 10%', 'Giảm 3K'],
    total: 0,
  },
  {
    productId: 3,
    imgUris: [
      'https://vn-test-11.slatic.net/p/89f3a32d0056bf2928df7a28bce134b6.jpg_200x200Q100.jpg_.webp',
      'https://cf.shopee.vn/file/70b1bf16d31068fc3ccaa6acbf6017bd',
      'https://cf.shopee.vn/file/2cbf99eb5f52a600cd5af9d74545cee1',
    ],
    price: '559.000đ',
    sale: '236.500đ',
    solve: 1360,
    count: 1500,
    description:
      'Áo hoodie Essentials nỉ bông dày dặn kèm ảnh thật POCAHOUSE Áo hoodie nam nữ nỉ bông TED12',
    vouchers: ['Giảm 10%', 'Giảm 3K'],
    total: 0,
  },
  {
    productId: 4,
    imgUris: [
      'https://cf.shopee.vn/file/0afae0cfa0fc7be75235e0fed914b6b3',
      'https://cf.shopee.vn/file/f610d90d45ee417bb6523a0bb67fdc9f',
    ],
    price: '149.000đ',
    sale: '89.000đ',
    solve: 12,
    count: 20,
    description:
      'Áo hoodie form rộng WIND unisex nỉ bông STAY HD11 thời trang nam nữ oversize ulzzang',
    vouchers: ['Giảm 20%', 'Giảm 3K', 'Giảm 5K', 'Giảm 15%', 'Giảm 5%'],
    total: 0,
  },
  {
    productId: 5,
    imgUris: [
      'https://cf.shopee.vn/file/0b8f9fe8df7e3d34cb7b4bead98221d4',
      'https://cf.shopee.vn/file/34182409c379b6a197bd9e72f53ad566',
    ],
    price: '289.000đ',
    sale: '169.000đ',
    solve: 75,
    count: 100,
    description:
      'Áo Len Nam Cổ Lọ SUKIYA Chất Len mềm mịn kiểu dáng Hàn Quốc AL14',
    vouchers: ['Giảm 50%', 'Giảm 8K'],
    total: 0,
  },
  {
    productId: 6,
    imgUris: [
      'https://cf.shopee.vn/file/3e57768ec683d20347866ce019c06448',
      'https://cf.shopee.vn/file/098d4d5cc83da9db07833577475d22b9',
    ],
    price: '59.000đ',
    sale: '36.500đ',
    solve: 56,
    count: 60,
    description:
      'Túi đeo chéo nam nữ phong cách Hàn 🦋phụ kiện thời trang🦋túi đeo chéo deja, misout unisex ulzzang kèm video',
    vouchers: ['Giảm 10%', 'Giảm 3K'],
    total: 0,
  },
  {
    productId: 7,
    imgUris: [
      'https://cf.shopee.vn/file/70b1bf16d31068fc3ccaa6acbf6017bd',
      'https://cf.shopee.vn/file/2cbf99eb5f52a600cd5af9d74545cee1',
    ],
    price: '559.000đ',
    sale: '236.500đ',
    solve: 1360,
    count: 1500,
    description:
      'Áo hoodie Essentials nỉ bông dày dặn kèm ảnh thật POCAHOUSE Áo hoodie nam nữ nỉ bông TED12',
    vouchers: ['Giảm 10%', 'Giảm 3K'],
    total: 0,
  },
  {
    productId: 8,
    imgUris: ['https://cf.shopee.vn/file/f610d90d45ee417bb6523a0bb67fdc9f'],
    price: '149.000đ',
    sale: '89.000đ',
    solve: 12,
    count: 20,
    description:
      'Áo hoodie form rộng WIND unisex nỉ bông STAY HD11 thời trang nam nữ oversize ulzzang',
    vouchers: ['Giảm 20%', 'Giảm 3K', 'Giảm 5K', 'Giảm 15%', 'Giảm 5%'],
    total: 0,
  },
  {
    productId: 9,
    imgUris: ['https://cf.shopee.vn/file/34182409c379b6a197bd9e72f53ad566'],
    price: '289.000đ',
    sale: '169.000đ',
    solve: 75,
    count: 100,
    description:
      'Áo Len Nam Cổ Lọ SUKIYA Chất Len mềm mịn kiểu dáng Hàn Quốc AL14',
    vouchers: ['Giảm 50%', 'Giảm 8K'],
    total: 0,
  },
  {
    productId: 10,
    imgUris: ['https://cf.shopee.vn/file/098d4d5cc83da9db07833577475d22b9'],
    price: '59.000đ',
    sale: '36.500đ',
    solve: 56,
    count: 60,
    description:
      'Túi đeo chéo nam nữ phong cách Hàn 🦋phụ kiện thời trang🦋túi đeo chéo deja, misout unisex ulzzang kèm video',
    vouchers: ['Giảm 10%', 'Giảm 3K'],
    total: 0,
  },
  {
    productId: 11,
    imgUris: ['https://cf.shopee.vn/file/2cbf99eb5f52a600cd5af9d74545cee1'],
    price: '559.000đ',
    sale: '236.500đ',
    solve: 1360,
    count: 1500,
    description:
      'Áo hoodie Essentials nỉ bông dày dặn kèm ảnh thật POCAHOUSE Áo hoodie nam nữ nỉ bông TED12',
    vouchers: ['Giảm 10%', 'Giảm 3K'],
    total: 0,
  },
];
console.log(JSON.stringify(products));
const ProductReducer = (state = INITIAL_STATE, action) => {
  // switch (action.type) {
  //   case FETCH_REQUEST_PRODUCTS:
  //     return state;
  //   case FETCH_SUCCESS_PRODUCTS:
  //     return {...state, productItem: action.payload};
  //   default:
  //     return state;
  // }
  const {products} = state;
  return {products};
};

export default ProductReducer;
