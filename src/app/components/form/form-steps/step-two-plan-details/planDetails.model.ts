class Plan {
  plan: string;
  icon: string;
  duration: {
    monthly: {
      price: string;
      addToTotal: number;
      promo: string;
    }
    yearly: {
      price: string;
      addToTotal: number;
      promo: string;
    },
  }

}

export const planOptions: Plan[] = [
  {
    plan: 'arcade',
    icon: '/assets/images/icon-arcade.svg',
    duration: {
      monthly: {
        price: '$9/mo',
        addToTotal: 9,
        promo: '',
      },
      yearly: {
        price: '$90/yr',
        addToTotal: 90,
        promo: '2 months free',
      },
    },
  },
  {
    plan: 'advanced',
    icon: '/assets/images/icon-advanced.svg',
    duration: {
      monthly: {
        price: '$12/mo',
        addToTotal: 12,
        promo: '',
      },
      yearly: {
        price: '$120/yr',
        addToTotal: 120,
        promo: '2 months free',
      },
    },
  },
  {
    plan: 'pro',
    icon: '/assets/images/icon-pro.svg',
    duration: {
      monthly: {
        price: '$15/mo',
        addToTotal: 15,
        promo: '',
      },
      yearly: {
        price: '$150/yr',
        addToTotal: 150,
        promo: '2 months free',
      },
    },
  },
];
