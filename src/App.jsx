import {
    Link,
    Outlet,
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Scroller from "./Scroller";

const Banner = () =>
<header>
    <ul>
        <li><Link to="/">Index Page</Link></li>
        <li><Link to="/1">Page 1</Link></li>
        <li><Link to="/2">Page 2</Link></li>
        <li><Link to="/3">Page 3</Link></li>
    </ul>
</header>;

const IndexPage = () =>
<>
    <main>
        <header>
            <h1>Index Page</h1>
        </header>

<p>I grow old ... I grow old ...I shall wear the bottoms of my trousers rolled.</p>

<p>Shall I part my hair behind?   Do I dare to eat a peach?<br/>
I shall wear white flannel trousers, and walk upon the beach.<br/>
I have heard the mermaids singing, each to each.</p>

<p>I do not think that they will sing to me.</p>

<p>I have seen them riding seaward on the waves<br/>
Combing the white hair of the waves blown back<br/>
When the wind blows the water white and black.<br/>
We have lingered in the chambers of the sea<br/>
By sea-girls wreathed with seaweed red and brown<br/>
Till human voices wake us, and we drown.</p>
    </main>
    <Banner />
</>;

const Page1 = () =>
<>
    <main>
        <header>
            <h1>Page 1</h1>
        </header>
        <p>Kullervo, Kalervo's offspring,<br/>
With the very bluest stockings,<br/>
On the ground the haft set firmly,<br/>
On the heath the hilt pressed tightly,<br/>
Turned the point against his bosom,<br/>
And upon the point he threw him,<br/>
Thus he found the death he sought for,<br/>
Cast himself into destruction.</p>

<p>Even so the young man perished,<br/>
Thus died Kullervo the hero,<br/>
Thus the hero's life was ended,<br/>
Perished thus the hapless hero.<br/>
Then the aged Väinämöinen,<br/>
When he heard that he had perished,<br/>
And that Kullervo had fallen,<br/>
Spoke his mind in words that follow:<br/>
"Never, people, in the future,<br/>
Rear a child in crooked fashion,<br/>
Rocking them in stupid fashion,<br/>
Soothing them to sleep like strangers.<br/>
Children reared in crooked fashion,<br/>
Boys thus rocked in stupid fashion,<br/>
Grow not up with understanding,<br/>
Nor attain to man's discretion,<br/>
Though they live till they are aged,<br/>
And in body well-developed.</p>
    </main>
    <Banner />
</>;

const Page2 = () =>
<>
    <main>
        <header>
            <h1>Page 2</h1>
        </header>
        <p>And did those feet in ancient time,<br/>
            Walk upon Englands mountains green:<br/>
            And was the holy Lamb of God,<br/>
        On Englands pleasant pastures seen!</p>

        <p>And did the Countenance Divine,<br/>
            Shine forth upon our clouded hills?<br/>
            And was Jerusalem builded here,<br/>
        Among these dark Satanic Mills?</p>

        <p>Bring me my Bow of burning gold:<br/>
            Bring me my Arrows of desire:<br/>
            Bring me my Spear: O clouds unfold:<br/>
        Bring me my Chariot of fire!</p>

        <p>I will not cease from Mental Fight,<br/>
            Nor shall my Sword sleep in my hand:<br/>
            Till we have built Jerusalem,<br/>
        In Englands green & pleasant Land.</p>

        <p><q>Would to God that all the Lords people were Prophets</q></p>
    </main>
    <Banner />
</>;

const Page3 = () =>
<>
    <main>
        <header>
            <h1>Page 3</h1>
        </header>

        <p>I mind as ’ow the night afore that show<br />
            Us five got talking,—we was in the know,<br />
            “Over the top to-morrer; boys, we’re for it,<br />
            First wave we are, first ruddy wave; that’s tore it.”<br />
            “Ah well,” says Jimmy,—an’ ’e’s seen some scrappin’—<br />
            “There ain’t more nor five things as can ’appen;<br />
            Ye get knocked out; else wounded—bad or cushy;<br />
        Scuppered; or nowt except yer feeling mushy.”</p>

        <p>One of us got the knock-out, blown to chops.<br />
            T’other was hurt, like, losin’ both ’is props.<br />
            An’ one, to use the word of ’ypocrites,<br />
            ‘Ad the misfortoon to be took by Fritz.<br />
            Now me, I wasn’t scratched, praise God Almighty<br />
            (Though next time please I’ll thank ’im for a blighty),<br />
            But poor young Jim, ’e’s livin’ an’ ’e’s not;<br />
            ’E reckoned ’e’d five chances, an’ ’e’s ’ad;<br />
            ’E’s wounded, killed, and pris’ner, all the lot—<br />
            The ruddy lot all rolled in one. Jim’s mad.
        </p>
    </main>
    <Banner />
</>;

const Root = ({children}) =>
<Scroller>
    {children}
</Scroller>;

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Root><Outlet /></Root>,
            children: [
                {
                    path: "",
                    element: <IndexPage />
                },
                {
                    path: "1",
                    element: <Page1 />
                },
                {
                    path: "2",
                    element: <Page2 />
                },
                {
                    path: "3",
                    element: <Page3 />
                }
            ]
        },
    ]
);

const App = () =>
<RouterProvider router={router}/>;

export default App;
