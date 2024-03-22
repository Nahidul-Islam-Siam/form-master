import Cousin from "../Cousin/Cousin";

const Uncle = ({asset}) => {
  return (
    <div>
      <h2>Uncle</h2>
      <section className="flex">
        <Cousin name="Siam" asset={asset}></Cousin>
        <Cousin name="Moni"></Cousin>
      </section>
    </div>
  );
};

export default Uncle;
