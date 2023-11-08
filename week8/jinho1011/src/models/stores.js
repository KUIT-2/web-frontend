const stores = [
  {
    id: 1,
    name: "샐로리 한남점",
    rate: 4.9,
    reviewCnt: 3919,
    minDeliveryTime: 13,
    maxDeliveryTime: 30,
    deliveryFee: 2000,
    menus: [
      {
        id: 1,
        name: "토마토 샐러드",
        isBest: true,
        price: 7600,
        ingredients: "계란, 옥수수, 양파, 올리브, 베이컨, 시저드레싱",
      },
      {
        id: 2,
        name: "시저 샐러드",
        isBest: false,
        price: 6900,
        ingredients: "로메인 상추와 크루통이며, 달걀, 올리브유, 레몬 즙, 마늘",
      },
      {
        id: 3,
        name: "리코타치즈 샐러드",
        isBest: false,
        price: 6900,
        ingredients: "리코타치즈, 양상추, 베이비채소, 방울토마톹, 블랙올리브",
      },
      {
        id: 4,
        name: "탄단지 샐러드",
        isBest: false,
        price: 7600,
        ingredients: "치킨, 고구마, 견과류, 크래배리, 오리엔탈",
      },
    ],
  },
];

export default stores;
