type props = {
  file: number;
};

export const ImgCard = ({ file }: props) => {
  return (
    <img src={require(`./../../assets/images/${file}.jpg`)} alt={`${file}`} />
  );
};
