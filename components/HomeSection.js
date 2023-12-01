import Link from 'next/link';

const HomeSection = () => {
    return(
        <div className="w-full h-[60vh] flex flex-col  align-center text-center gap-3">
        <p className="text-2xl text-gray-900 dark:text-white">
        Hi
        {' '}
        <span>👋</span>
      </p>
      <h1 className="text-4xl ">
        {'I’m Pamphile '}
        {' '}
        <span className="text-blue-600">
          {' '}
          MKP
        </span>
        {' '}
        <br />
        Glad to see you here!
      </h1>
      <p className="w-full text-sm font-medium text-gray-900 dark:text-white text-justify">
        {`Nice to meet you. I'm a full-stack software developer
         and I'm excited to tell you all about it! Whether you need a brand new product,
          a cool new feature, or an awesome new website, I've got you covered. I've got
           a whole bunch of experience under my belt and I'd love for you to take a look
            at some of my work. If you like what you see and you've got a project that
             needs to be coded up, don't hesitate to reach out! Let's create something
              amazing together.`}
      </p>
      <Link href="/Contacts" className="w-fit text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm my-2 px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Get in Touch</Link>
    </div>
    )
}

export default HomeSection;