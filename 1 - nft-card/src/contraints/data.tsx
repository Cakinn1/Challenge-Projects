export default {};

interface DataProps {
  image: string;
  nftName: string;
  description: string;
  cost: number;
  daysLeft: number;
  author: string;
  id: number;
  ethImage: string;
  clockImage: string;
  authorImage: string
}

export const nftData: DataProps = {
  author: "jules wyvern",
  image: "./images/image-equilibrium.jpg",
  cost: 0.041,
  daysLeft: 3,
  description: "Our Equilibrium collection promotes balance and calm.",
  nftName: "Equilibrium",
  id: 3429,
  ethImage: "./images/icon-ethereum.svg",
  clockImage: "./images/icon-clock.svg",
authorImage: "./images/image-avatar.png"
};
