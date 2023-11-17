const stores = [
  {
    id: 1,
    name: "샐로리 한남점",
    rate: 4.9,
    ranking: "1위",
    reviewCnt: 3919,
    minDeliveryTime: 13,
    maxDeliveryTime: 30,
    // 최소 배달 금액은 StoreList에 없음
    minDeliveryPrice: 13000,
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
  {
    id: 2,
    name: "그린가든 강남점",
    rate: 4.7,
    ranking: "2위",
    reviewCnt: 2451,
    minDeliveryTime: 15,
    maxDeliveryTime: 25,
    minDeliveryPrice: 12000,
    deliveryFee: 2500,
    menus: [
      {
        id: 1,
        name: "아보카도 그린 샐러드",
        isBest: true,
        price: 8900,
        ingredients: "아보카도, 케일, 시금치, 퀴노아, 레몬 드레싱",
      },
      {
        id: 2,
        name: "베리 믹스 샐러드",
        isBest: false,
        price: 8500,
        ingredients: "블루베리, 라즈베리, 스트로베리, 믹스 그린, 요거트 드레싱",
      },
    ],
  },
  {
    id: 3,
    name: "헬시키친 홍대입구",
    rate: 4.8,
    ranking: "3위",
    reviewCnt: 1784,
    minDeliveryTime: 20,
    maxDeliveryTime: 35,
    minDeliveryPrice: 10000,
    deliveryFee: 1500,
    menus: [
      {
        id: 1,
        name: "쿼리노아 비트 샐러드",
        isBest: true,
        price: 9200,
        ingredients: "비트, 쿼리노아, 아몬드, 양배추, 사과 사이더 드레싱",
      },
      {
        id: 2,
        name: "펌프킨 넛 샐러드",
        isBest: false,
        price: 8700,
        ingredients: "호박, 피칸, 크랜베리, 아루굴라, 발사믹 드레싱",
      },
    ],
  },
];

export default stores;
