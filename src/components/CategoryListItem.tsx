interface IProps {
  icon: string;
  name: string;
}

const CategoryListItem = ({ name }: IProps) => {
  return (
    <div>
      <div>{name}</div>
    </div>
  );
};

export default CategoryListItem;
