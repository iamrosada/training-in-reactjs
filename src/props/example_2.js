/*it is the second example i going to work with the props  */
const Equipe = (props) => {
  return (
    <div>
      <About username={props.nome} cargo={props.cargo} idade={props.idade} />
      <Social fb={props.facebook} />
      <hr />
    </div>
  );
};

const About = (props) => {
  return (
    <div>
      <div>
        <h1> ola eu sou o (a) {props.username}</h1>
        <h1> o meu cargo na empresa é {props.cargo}</h1>
        <h1> idade {props.idade} anos </h1>
      </div>
    </div>
  );
};
const Social = (props) => {
  return (
    <div>
      <a href={props.fb}>facebook</a>
      <a href={props.fb}>Instagram</a>
    </div>
  );
};
export default function SecondProps() {
  return (
    <div>
      <h1>Conheça a nossa equipe :</h1>
      <Equipe
        nome="luis"
        cargo="programador"
        idade="22"
        facebook="http://facebook.com"
      />
    </div>
  );
}
