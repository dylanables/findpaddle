import Nav from '../Navigation/Nav';
import Footer from '../Footer/Footer';

function Root() {

  return (
    <>
      <Nav />
      <div className='body-container'>
        <div className='hero'>
          <h1>Find Your Next Pickleball Paddle!</h1>
          <p>All the tools you need discover the best paddle to improve your game and smash the competition! All our tools are easy to use and constantly being updated as new paddles are released, allowing you to save time and money when researching.</p>
        </div>
        <div className='why'>
          <h2>Why use FindPaddle?</h2>
          <p>With soooo many paddles on the market, it can be overwhelming to make a decision. There are lots of factors that go into whether a certain paddle will fit your game. Our tools help you determine the best paddle for you and find the best retailer to make your purchase.</p>
        </div>
        <div className='email'>
          <h2>Stay up to date</h2>
          <p>Enter your email to be notified when we release new tools and occaisonal paddle releases.</p>
          <input type='email' placeholder='Enter your email...' />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Root