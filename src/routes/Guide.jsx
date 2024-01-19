import Nav from '../Navigation/Nav';
import Footer from '../Footer/Footer';
import '../index.css';
import { Container, Button } from '@mui/material';
import { ScrollRestoration } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Guide() {

  return (
    <>
      <ScrollRestoration/>
      <Nav />
      <Container>
        <section className='margintop'>
            <h1>Pickleball Paddle Guide</h1>
            
            <h2>Understanding Pickleball Paddle Basics</h2>

            <h3>1. Paddle Materials:</h3>
            <ul>
                <li><strong>Carbon Fiber:</strong> Lightweight and strong material offering excellent power and spin potential, favored by most advanced players.</li>
                <li><strong>Graphite:</strong> Slightly softer feel than carbon fiber offering increase touch, finesse, and foregiveness.</li>
                <li><strong>Fiberglass:</strong> Softer and more cushioned feel upon ball contact, great option for beginners looking for a forgiving paddle that helps to reduce vibrations and fatigue.</li>
                <li><strong>Composite:</strong> Combination of materials like fiberglass, carbon fiber, and polymer, providing a good balance of power and control.</li>
                <li><strong>Wood:</strong> Traditional and cost-effective, but heavier and generally not recommended for anyone.</li>
            </ul>

            <h3>2. Paddle Core:</h3>
            <ul>
                <li><strong>Nomex:</strong> Stiffer and provides more power.</li>
                <li><strong>Polymer:</strong> Softer, allowing for better control and touch.</li>
                <li><strong>Aluminum:</strong> Lighter and quieter, but less popular due to reduced power.</li>
            </ul>

            <h3>3. Paddle Shape:</h3>
            <ul>
                <li><strong>Elongated:</strong> Popular option for intermediate/advanced players looking to add more reach and power.</li>
                <li><strong>Square:</strong> Wider face, offering a larger sweet spot for beginners.</li>
                <li><strong>Standard:</strong> Balanced option, suitable for all-around play.</li>
                <li><strong>Long Handle:</strong> Extended handle for two-handed grip, preferred by some players.</li>
            </ul>

            <h2>Evaluating Your Playing Style</h2>

            <h3>1. Playing Level:</h3>
            <ul>
                <li><strong>Beginners:</strong> Focus on paddles with larger sweet spots for better control.</li>
                <li><strong>Intermediate:</strong> Consider a balanced paddle with a mix of power and control.</li>
                <li><strong>Advanced:</strong> Look for a paddle that complements your specific playing style and preferences.</li>
            </ul>

            <h3>2. Playing Style:</h3>
            <ul>
                <li><strong>Power Player:</strong> Graphite paddles with a polymer core for maximum power.</li>
                <li><strong>Control Player:</strong> Paddles with a softer core and a textured face for enhanced control.</li>
                <li><strong>All-Around Player:</strong> A balanced paddle that combines power and control.</li>
            </ul>

            <h3>2. Preferred Game:</h3>
            <ul>
                <li><strong>Singles:</strong> Opt for a slightly heavier paddle with more power.</li>
                <li><strong>Doubles:</strong> Consider a lighter paddle with better maneuverability for quick exchanges at the net.</li>
            </ul>

            <h2>Choosing Paddle Specifications</h2>

            <h3>1. Weight:</h3>
            <ul>
                <li><strong>Lightweight (7.3-7.8 oz):</strong> Maneuverable and suitable for finesse players.</li>
                <li><strong>Medium Weight (7.9-8.4 oz):</strong> Balanced and widely preferred by players.</li>
                <li><strong>Heavyweight (8.5 oz and above):</strong> Offers more power but requires more strength.</li>
            </ul>

            <h3>2. Grip Size:</h3>
            <ul>
                <li><strong>Small:</strong> 4 inches in circumference, suitable for players with small hands.</li>
                <li><strong>Medium:</strong> 4.25 inches, the standard for most players.</li>
                <li><strong>Large:</strong> 4.5 inches, ideal for players with larger hands.</li>
            </ul>

            <h3>3. Grip Style:</h3>
            <ul>
                <li><strong>Cushioned Grip:</strong> Offers comfort during long games.</li>
                <li><strong>Perforated Grip:</strong> Enhances moisture absorption, reducing slippage.</li>
            </ul>

            <h2>Final Considerations</h2>

            <h3>1. Budget:</h3>
            <p>Determine your budget and find the best paddle within that range.</p>

            <h3>2. Brand Reputation:</h3>
            <p>Choose reputable brands known for quality and durability.</p>

            <h3>3. Paddle Care:</h3>
            <p>Follow manufacturer guidelines for maintenance to ensure your paddle's longevity.</p>

            <br/>

            <p>Remember, the best pickleball paddle for you is a personal choice that aligns with your playing style, skill level, and preferences.</p>
            <p>Now that you know what to look for in your next paddle, use our <Link to={"/search"}><Button>Search Tool</Button></Link> to filter based on your preferences.</p>
            <p>Or, if you still need more help determining what's best for you, take out <Link to={"/search"}><Button>Paddle Quiz</Button></Link> to get our personal recommendations.</p>

        </section>
      </Container>
      <Footer sidebar={''} />
    </>
  );
}

export default Guide