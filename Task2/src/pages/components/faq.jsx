import './../../css/faq.css';
import { FaqQustion } from './faqQuestion';
import { questions_answers } from '../../comp-info/faqList';
import { NavLink } from 'react-router-dom';

export function FAQ({ isPricing }) {

    const FAQ_BLOCK =
        <article className="FAQ">
            <section className="FAQ-label">
                <h2>Frequently asked questions</h2>
                <NavLink to="/contact-us">Contact us For More Info</NavLink>
            </section>
            <section className="FAQ-container">
                <ol>
                    {questions_answers.map((block) => {
                        return <FaqQustion question={block.question} answer={block.answer} />;
                    })
                    }
                </ol>
            </section>
        </article>;

    function faqContainerRender(cond, elem) {
        if (cond)
            return (<div className='FAQ-article'>{elem}</div>);
        else
            return ( elem );
    }

    return (
        <>
            {
                faqContainerRender(isPricing, FAQ_BLOCK)
            }
        </>
    )
};
