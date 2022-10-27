import Post from "./Post"

function HomePage() {

  const fakeData = [{
      postedDate: '08-12-1998',
      username: 'newyorker2018',
      upNumber: 35,
      downNumber: 1,
      commentNumber: 300,
      userimage: 'https://marketplace.canva.com/EAE6OJ2qP8U/1/0/1600w/canva-gamer-with-glasses-character-twitch-profile-picture-CVfgWIJGgRo.jpg',
      lenghtOfImageArray: 3,
      imageArray: [
        'https://cdn.pixabay.com/photo/2016/10/28/13/09/usa-1777986_960_720.jpg',
        'https://cdn.pixabay.com/photo/2017/08/31/05/36/buildings-2699520_960_720.jpg',
        'https://cdn.pixabay.com/photo/2015/03/11/12/31/buildings-668616_960_720.jpg'
      ]
    },{
      postedDate: '31-07-2016',
      username: 'sena2022',
      upNumber: 250,
      downNumber: 41,
      commentNumber: 89,
      userimage: 'https://pixlr.com/studio/template/6264364c-b8cc-4f4f-92d8-28c69a2b756w/thumbnail.webp',
      lenghtOfImageArray: 1,
      imageArray: [
        'https://cdn.pixabay.com/photo/2016/08/30/11/49/beach-1630458_960_720.jpg'
      ]
    },{
      postedDate: '08-12-1998',
      username: 'ahmet31',
      upNumber: 9939,
      downNumber: 213,
      commentNumber: 23,
      userimage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3WEmfJCME77ZGymWrlJkXRv5bWg9QQmQEzw&usqp=CAU',
      lenghtOfImageArray: 2,
      imageArray: [
        'https://cdn.pixabay.com/photo/2014/11/06/21/13/brussels-519965_960_720.jpg',
        'https://cdn.pixabay.com/photo/2016/07/22/14/58/brussels-1534989_960_720.jpg'
      ]
    },{
      postedDate: '12-31-1999',
      username: 'angele_vl',
      upNumber: 356,
      downNumber: 14,
      commentNumber: 500,
      lenghtOfImageArray: 1,
      userimage: 'https://lastfm.freetls.fastly.net/i/u/ar0/7c7e42f3d266768b0183813b3974c406',
      imageArray: [
        'https://cdn.pixabay.com/photo/2012/11/25/20/05/forest-67286_960_720.jpg'
      ]
    }
  ]

    return (
      <div className='bg-yellow-900 flex justify-center h-[2000px] pt-[70px]'>
        <div className='opacity-100 '>    
          {fakeData.map((eleman, index) => (
            <Post key={index} lenghtOfImageArray={eleman.lenghtOfImageArray} postedDate={eleman.postedDate} username={eleman.username} upNumber={eleman.upNumber} downNumber={eleman.downNumber} commentNumber={eleman.commentNumber} userimage={eleman.userimage} imageArray={eleman.imageArray} />
          ))}
        </div>
      </div>
    )
}

export default HomePage