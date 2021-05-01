const Student = (props) => {
  return (
    <div>
      <h2>
        bem vindo {props.name}, voce tem {props.idade} anos de idade
      </h2>
    </div>
  );
};

function PropsInReact() {
  return (
    <div>
      <Student name="luis" idade="22" />
      <Student name="rosada" idade="21" />
    </div>
  );
}

export default PropsInReact;
