import { bus, bus1, callCenter, callCenter1 } from "@/assets/index1";
import { shipper, carrier } from "./../assets/index";

const guideData = [
    {
        title:`Maxime mollitia,
        molestiae quas vel sint mazimd fjfi`,
        id:1,
        info:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
        obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
        nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
        tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
        quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
        sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
        recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
        minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
        quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
        fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
        consequuntur! Commodi minima excepturi repudiandae velit hic maxime
        doloremque. Quaerat provident commodi consectetur veniam similique ad 
        earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
        fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
        suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
        modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
        totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam `,
        category:'shippers',
        type:'blog',
        date:'1 jun 2022',
        image:shipper
    },
    {
        title:'Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, c',
        id:2,
        info:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
        obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
        nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
        tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
        quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
        sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
        recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
        minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
        quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
        fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
        consequuntur! Commodi minima excepturi repudiandae velit hic maxime
        doloremque. Quaerat provident commodi consectetur veniam similique ad 
        earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
        fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
        suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
        modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
        totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam `,
        category:'carrier',
        type:'video',
        date:'1 jun 2022',
        image:carrier
    },
    {
        title:'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        id:3,
        info:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
        obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
        nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
        tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
        quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
        sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
        recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
        minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
        quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
        fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
        consequuntur! Commodi minima excepturi repudiandae velit hic maxime
        doloremque. Quaerat provident commodi consectetur veniam similique ad 
        earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
        fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
        suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
        modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
        totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam `,
        category:'brokers',
        type:'blog',
        date:'1 jun 2022',
        image:bus
    },
    {
        title:'Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor jdjj',
        id:4,
        info:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
        obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
        nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
        tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
        quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
        sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
        recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
        minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
        quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
        fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
        consequuntur! Commodi minima excepturi repudiandae velit hic maxime
        doloremque. Quaerat provident commodi consectetur veniam similique ad 
        earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
        fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
        suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
        modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
        totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam `,
        category:'shippers',
        type:'blog',
        date:'1 jun 2022',
        image:shipper
    },
    {
        title:'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        id:5,
        info:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
        obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
        nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
        tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
        quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
        sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
        recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
        minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
        quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
        fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
        consequuntur! Commodi minima excepturi repudiandae velit hic maxime
        doloremque. Quaerat provident commodi consectetur veniam similique ad 
        earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
        fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
        suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
        modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
        totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam `,
        category:'brokers',
        type:'video',
        date:'1 jun 2022',
        image:callCenter
    },
    {
        title:'ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat',
        id:6,
        info:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
        obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
        nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
        tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
        quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
        sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
        recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
        minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
        quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
        fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
        consequuntur! Commodi minima excepturi repudiandae velit hic maxime
        doloremque. Quaerat provident commodi consectetur veniam similique ad 
        earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
        fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
        suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
        modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
        totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam `,
        category:'shippers',
        type:'blog',
        date:'1 jun 2022',
        image:shipper
    },
    {
        title:'itur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas t',
        id:7,
        info:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
        obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
        nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
        tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
        quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
        sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
        recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
        minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
        quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
        fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
        consequuntur! Commodi minima excepturi repudiandae velit hic maxime
        doloremque. Quaerat provident commodi consectetur veniam similique ad 
        earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
        fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
        suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
        modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
        totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam `,
        category:'carrier',
        type:'video',
        date:'1 jun 2022',
        image:bus
    },
    {
        title:'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        id:8,
        info:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
        obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
        nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
        tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
        quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
        sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
        recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
        minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
        quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
        fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
        consequuntur! Commodi minima excepturi repudiandae velit hic maxime
        doloremque. Quaerat provident commodi consectetur veniam similique ad 
        earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
        fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
        suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
        modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
        totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam `,
        category:'carriar',
        type:'blog',
        date:'1 jun 2022',
        image:bus1
    },
    {
        title:'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        id:9,
        info:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
        obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
        nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
        tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
        quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
        sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
        recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
        minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
        quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
        fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
        consequuntur! Commodi minima excepturi repudiandae velit hic maxime
        doloremque. Quaerat provident commodi consectetur veniam similique ad 
        earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
        fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
        suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
        modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
        totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam `,
        category:'shippers',
        type:'video',
        date:'1 jun 2022',
        image:shipper
    },
    {
        title:'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        id:10,
        info:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
        obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
        nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
        tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
        quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
        sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
        recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
        minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
        quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
        fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
        consequuntur! Commodi minima excepturi repudiandae velit hic maxime
        doloremque. Quaerat provident commodi consectetur veniam similique ad 
        earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
        fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
        suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
        modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
        totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam `,
        category:'shippers',
        type:'blog',
        date:'1 jun 2022',
        image:shipper
    },
    {
        title:'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        id:11,
        info:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
        obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
        nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
        tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
        quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
        sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
        recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
        minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
        quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
        fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
        consequuntur! Commodi minima excepturi repudiandae velit hic maxime
        doloremque. Quaerat provident commodi consectetur veniam similique ad 
        earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
        fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
        suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
        modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
        totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam `,
        category:'shippers',
        type:'video',
        date:'1 jun 2022',
        image:shipper
    },
    {
        title:'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        id:12,
        info:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
        obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
        nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
        tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
        quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
        sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
        recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
        minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
        quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
        fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
        consequuntur! Commodi minima excepturi repudiandae velit hic maxime
        doloremque. Quaerat provident commodi consectetur veniam similique ad 
        earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
        fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
        suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
        modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
        totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam `,
        category:'brokers',
        type:'blog',
        date:'1 jun 2022',
        image:callCenter1
    },
]

export {guideData}