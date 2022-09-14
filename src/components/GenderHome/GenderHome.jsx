import classes from './GenderHome.module.css'


export const GenderHome = ({image, text}) => {
  return(
    <div className={classes.GenderHome}>
      <h1>{text}</h1>
      <div className={classes.photo}>
        <img src={image} alt="home-man"/>
      </div>
    </div>
  )
}