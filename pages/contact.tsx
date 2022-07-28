import { FormEvent, useEffect, useState} from "react";
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle, AiFillInstagram, AiOutlineMail } from 'react-icons/ai';
import {BiCopy} from 'react-icons/bi';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Contact = () => {
    const [copied, setCopied] = useState(false);

    const onSend = (e:FormEvent) => {
        e.preventDefault();
        console.log('Getting in touch...');
    }

    useEffect(() => {
        if(copied) {
            setTimeout(() => {
                setCopied(false);
            }
            , 2000);
        }
    }, [copied]);

    return (
        <div className="mt-16">
            {/* <h1>
                <div>See this video for sendGrid API</div>
                <div>May be use mailjet.com</div>
                <a href='https://www.youtube.com/watch?v=QrVYLLpoyMw&t=1s'>https://www.youtube.com/watch?v=QrVYLLpoyMw&t=1s</a>
            </h1>
            <form className="w-full rounded-lg items-center mb-20" onSubmit={onSend}>
                <h1 className="text-yellow-600 text-xl text-center font-semibold sm:px-12 mb-8">Get in Touch</h1>
                <div className="sm:px-12 pb-10">
                    <div className="w-full mb-6">
                        <div className="flex justify-center">
                            <input className="px-8  w-full border rounded py-2 text-stone-700 bg-stone-300 focus:outline-none items-center placeholder:text-stone-500" type='text' placeholder="Name" />
                        </div>
                    </div>
                    <div className="w-full mb-6">
                        <div className="flex justify-center">
                            <input className="px-8  w-full border rounded py-2 text-stone-700 bg-stone-300 focus:outline-none items-center placeholder:text-stone-500" type='text' placeholder="Email" />
                        </div>
                    </div>
                    <div className="w-full mb-6">
                        <div className="flex justify-center">
                            <textarea className="resize-none px-8 w-full h-52 border rounded py-2 text-stone-700 bg-stone-300 focus:outline-none items-center placeholder:text-stone-500" placeholder="Message"></textarea>
                        </div>
                    </div>
                    <button type="submit"
                        className="w-full bg-transparent hover:bg-yellow-500 text-yellow-700 font-semibold hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded">Send</button>
                </div>
            </form> */}


            {/* <div className="flex flex-col justify-center items-center">
                <span className="text-xs text-yellow-500/60 py-1 px-2 bg-yellow-800/60 rounded">OR</span>
                <span>Email me at</span>
            </div> */}


            <div className="text-center text-sm mb-2 text-stone-300/70">Send me an email</div>
            <div className="flex justify-center text-center mb-16">
                <CopyToClipboard text="agnosticoder@gmail.com" onCopy={() => setCopied(true)}>
                    <div className="relative w-80 bg-transparent text-yellow-700 font-semibold py-8 px-4 border border-yellow-500 hover:bg-yellow-500/10 rounded cursor-pointer">
                        <span title="copy email" className="text-yellow-500 border-b-[1px] border-yellow-500 border-dashed">agnosticoder@gmail.com</span>
                        {copied ?
                            <span>
                                <span className="absolute top-2 right-7 font-normal text-xs">copied</span>
                                <BiCopy className="absolute top-2 right-2" />
                            </span>
                            :
                            <span>
                                <span className="absolute top-2 right-7 font-normal text-xs">copy</span>
                                <BiCopy className="absolute top-2 right-2" />
                            </span>
                        }
                    </div>
                </CopyToClipboard>
            </div>

            <div className='text-xs italic text-center text-stone-300/70 mb-4'>OR</div>
            <div className='text-center mb-20 flex justify-center items-center'>
                <span className='mr-2 text-yellow-500 border-b-[1px] border-yellow-500 border-dashed'>Ping me on Twitter</span>
                <a className='inline-block text-blue-500' title="twitter" href='https://twitter.com/agnosticoder' target='twitter'>
                    <AiFillTwitterCircle size={30}/>
                </a>
            </div>


            <div className="flex justify-center gap-4 text-3xl">
                <a title="github" href='https://github.com/agnosticoder' target='github'>
                    <AiFillGithub />
                </a>
                <a title="linkedin" href='https://www.linkedin.com/in/agnonsticoder/' target='linkedin'>
                    <AiFillLinkedin />
                </a>
                <a title="twitter" href='https://twitter.com/agnosticoder' target='twitter'>
                    <AiFillTwitterCircle />
                </a>
                <a title="instagram" href='https://www.instagram.com/satinder_singh_taak/' target='instagram'>
                    <AiFillInstagram />
                </a>
                <a title='email' href='mailto:agnosticoder@gmail.com'>
                    <AiOutlineMail />
                </a>
            </div>
        </div>
    );
}

export default Contact;