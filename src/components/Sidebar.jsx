const newLists = [
    {
        id: 1,
        title: 'Hydrogen VS Electric Cars',
        description : 'Will hydrogen-fueled cars ever catch up to EVs?'
    },
    {
        id: 2,
        title: 'The Downsides of AI Artistry',
        description : 'What are the possible adverse effects of on-demand AI image generation?'
    },
    {
        id: 3,
        title: 'Is VC Funding Drying Up?',
        description : 'Private funding by VC firms is down 50% YOY. We take a look at what that means.'
    }
]

const Sidebar = () => {
  return (
    <>
        <div className="bg-[#00001a] text-white p-6 mb-12 sm:col-span-2">
            <h1 className="text-[28px] text-[#e9ab53] font-bold">New</h1>
            <ul className="divide-y-2">
                {newLists.map((newList) => (
                    <li className="mt-8" key={newList.id}>
                        <h1 className="text-[20px] font-bold mt-6 mb-2"><a href="#" className="hover:text-[#e9ab53]">{newList.title}</a></h1>
                        <p className="text-[14px] text-[#fffdfa] mb-2">{newList.description}</p>
                    </li>
                ))}
                
            </ul>
        </div>
    </>
  )
}

export default Sidebar