const books = [
    {
        "id": 1,
        "title": "The Enchanted Forest",
        "author": "Ella Greenwood",
        "description": "A tale of a magical forest where mythical creatures dwell.",
        "category": "Fantasy",
        "rating": 4.5,
        "summary": "Step into a world where ancient trees whisper secrets and mystical beings roam freely. Ella Greenwood's 'The Enchanted Forest' invites readers on a captivating journey through a realm brimming with wonder, danger, and the allure of untold magic."
    },
    {
        "id": 2,
        "title": "Dragon's Reign",
        "author": "Tom Elden",
        "description": "A kingdom ruled by dragons and ancient spells.",
        "category": "Fantasy",
        "rating": 4.7,
        "summary": "In 'Dragon's Reign,' Tom Elden unveils a vivid fantasy land where colossal dragons are not just beasts of legend, but the formidable rulers. Discover a society shaped by their immense power and the lingering magic of ancient spells, where survival depends on navigating their fiery will."
    },
    {
        "id": 3,
        "title": "Mystic Quest",
        "author": "Nora Vance",
        "description": "A young hero's journey to find a lost artifact.",
        "category": "Fantasy",
        "rating": 4.3,
        "summary": "Join a determined young hero on an epic 'Mystic Quest' as they embark on a perilous adventure to recover a legendary lost artifact. Nora Vance weaves a thrilling narrative filled with ancient prophecies, formidable challenges, and unexpected allies."
    },
    {
        "id": 4,
        "title": "Elven Tales",
        "author": "Liam Ashford",
        "description": "Stories of the ancient elven tribes.",
        "category": "Fantasy",
        "rating": 4.4,
        "summary": "Elven Tales by Liam Ashford offers a rich tapestry of narratives from the mystical lives of ancient elven tribes. Delve into their timeless traditions, their profound connection to nature, and the epic sagas that have shaped their ethereal existence through generations."
    },
    {
        "id": 5,
        "title": "Wizards of the North",
        "author": "Clara Moon",
        "description": "A group of wizards defending their homeland.",
        "category": "Fantasy",
        "rating": 4.6,
        "summary": "In 'Wizards of the North,' Clara Moon introduces a formidable coven of magic-wielders dedicated to protecting their icy homeland from encroaching darkness. Witness their powerful spells and unwavering courage as they stand as the last line of defense against forces threatening to shatter their peace."
    },
    {
        "id": 6,
        "title": "Chronicles of Time",
        "author": "Richard Newton",
        "description": "A gripping history of civilizations.",
        "category": "History",
        "rating": 4.2,
        "summary": "Richard Newton's 'Chronicles of Time' presents an expansive and gripping account of human civilizations throughout history. From ancient empires to modern societies, this book meticulously details the rise and fall of nations, cultural shifts, and pivotal moments that shaped our world."
    },
    {
        "id": 7,
        "title": "Empire's Rise",
        "author": "Amelia Grant",
        "description": "The story of ancient empires from rise to fall.",
        "category": "History",
        "rating": 4.5,
        "summary": "Amelia Grant's 'Empire's Rise' provides a compelling narrative tracing the remarkable journeys of ancient empires from their nascent beginnings to their eventual decline. Explore the strategic brilliance, cultural innovations, and inherent weaknesses that determined their fates."
    },
    {
        "id": 8,
        "title": "Revolutionary Minds",
        "author": "Daniel Ross",
        "description": "Figures who sparked global revolutions.",
        "category": "History",
        "rating": 4.1,
        "summary": "In 'Revolutionary Minds,' Daniel Ross delves into the lives and philosophies of individuals who ignited global movements and transformed societies. Discover the catalysts behind their revolutionary ideas and the profound impact they had on the course of human history."
    },
    {
        "id": 9,
        "title": "The World Wars",
        "author": "Brian Oak",
        "description": "A detailed look into the world wars.",
        "category": "History",
        "rating": 4.3,
        "summary": "Brian Oak's 'The World Wars' offers an exhaustive and compelling examination of these monumental conflicts. From the intricate political landscapes to the devastating battlefields, this book provides deep insights into the events, strategies, and human experiences that defined the 20th century."
    },
    {
        "id": 10,
        "title": "Historic Cities",
        "author": "Julia Frank",
        "description": "Cultural journeys through historic cities.",
        "category": "History",
        "rating": 4.4,
        "summary": "Historic Cities by Julia Frank takes you on an enthralling cultural tour of the world's most iconic urban centers. Explore the ancient architecture, vibrant traditions, and captivating stories embedded in the very fabric of these living historical sites."
    },
    {
        "id": 11,
        "title": "Galactic Wars",
        "author": "Samantha Reyes",
        "description": "A saga of interstellar battles.",
        "category": "Science Fiction",
        "rating": 4.8,
        "summary": "Prepare for an epic journey through the cosmos in Samantha Reyes' 'Galactic Wars,' a thrilling saga of interstellar conflicts. Witness humanity's struggle for survival and dominance across star systems, where advanced technology and cunning tactics define the fate of civilizations."
    },
    {
        "id": 12,
        "title": "The Last Planet",
        "author": "Leo Cortez",
        "description": "Survivors colonize a distant world.",
        "category": "Science Fiction",
        "rating": 4.5,
        "summary": "In a post-apocalyptic future, Leo Cortez's 'The Last Planet' follows the desperate plight of humanity's last survivors as they embark on a monumental mission: to colonize a pristine, yet unpredictable, distant world and build a new future from the ashes of the old."
    },
    {
        "id": 13,
        "title": "Quantum Error",
        "author": "Mira Sloane",
        "description": "An experiment that tore open time.",
        "category": "Science Fiction",
        "rating": 4.6,
        "summary": "Quantum Error by Mira Sloane plunges readers into a high-stakes scientific blunder. When a groundbreaking experiment goes awry, the very fabric of time is ripped open, unleashing unforeseen consequences that threaten to unravel reality itself."
    },
    {
        "id": 14,
        "title": "Alien Protocol",
        "author": "Kevin Shore",
        "description": "Contact with an intelligent alien race.",
        "category": "Science Fiction",
        "rating": 4.4,
        "summary": "Kevin Shore's 'Alien Protocol' explores the thrilling and precarious moments of humanity's first official contact with an intelligent alien civilization. Navigate the complexities of interstellar diplomacy, cultural clashes, and the universal quest for understanding in this captivating sci-fi thriller."
    },
    {
        "id": 15,
        "title": "Zero Gravity",
        "author": "Nina York",
        "description": "A detective story set on a space station.",
        "category": "Science Fiction",
        "rating": 4.3,
        "summary": "In 'Zero Gravity,' Nina York delivers a unique blend of science fiction and mystery. Follow a seasoned detective as they navigate the intricate corridors and zero-gravity environments of a bustling space station to solve a perplexing crime that threatens to destabilize the fragile peace among its inhabitants."
    },
    {
        "id": 16,
        "title": "The Vanishing Clue",
        "author": "Mark Doyle",
        "description": "A detective solves a baffling case.",
        "category": "Mystery",
        "rating": 4.1,
        "summary": "Mark Doyle's 'The Vanishing Clue' presents a classic detective tale where a cunning investigator must piece together fragmented evidence to solve a truly baffling case. Every lead disappears as quickly as it emerges, challenging even the most seasoned minds."
    },
    {
        "id": 17,
        "title": "Shadows of Deceit",
        "author": "Emma Bates",
        "description": "A psychological mystery in a quiet town.",
        "category": "Mystery",
        "rating": 4.3,
        "summary": "Shadows of Deceit by Emma Bates plunges into the unsettling quiet of a small town, revealing a sinister psychological mystery beneath its serene facade. Uncover hidden secrets and dark motives as the truth slowly unravels, exposing the deceit that binds its residents."
    },
    {
        "id": 18,
        "title": "Murder at Midnight",
        "author": "Tom King",
        "description": "A locked-room murder in a hotel.",
        "category": "Mystery",
        "rating": 4.4,
        "summary": "Tom King's 'Murder at Midnight' delivers a gripping locked-room mystery set within the confines of an opulent hotel. With no apparent escape for the killer, investigators must delve into the secrets of the guests and staff to uncover who committed the impossible crime."
    },
    {
        "id": 19,
        "title": "Whispers in the Hall",
        "author": "Tina Clarke",
        "description": "Ghostly mysteries in a haunted manor.",
        "category": "Mystery",
        "rating": 4.2,
        "summary": "Journey into the eerie silence of a haunted manor in Tina Clarke's 'Whispers in the Hall.' This chilling mystery uncovers the spectral secrets of its past residents, as a lone investigator dares to confront the ghostly phenomena and solve the long-forgotten tragedies."
    },
    {
        "id": 20,
        "title": "The Final Puzzle",
        "author": "Eliot Shore",
        "description": "A genius must solve one last riddle.",
        "category": "Mystery",
        "rating": 4.5,
        "summary": "In 'The Final Puzzle,' Eliot Shore presents a high-stakes intellectual challenge. A brilliant mind, known for solving the unsolvable, is faced with one last, intricate riddle that holds the key to a monumental secret, testing their intellect and courage to the very limits."
    },
    {
        "id": 21,
        "title": "Life of a Genius",
        "author": "Anne Stevens",
        "description": "Biography of a scientific innovator.",
        "category": "Biography",
        "rating": 4.6,
        "summary": "Anne Stevens chronicles the extraordinary 'Life of a Genius,' detailing the groundbreaking journey of a scientific innovator. Discover the inspirations, struggles, and triumphs that shaped a mind capable of redefining the boundaries of human knowledge and invention."
    },
    {
        "id": 22,
        "title": "Against All Odds",
        "author": "Jasmine Patel",
        "description": "A woman’s journey through adversity.",
        "category": "Biography",
        "rating": 4.5,
        "summary": "Jasmine Patel's 'Against All Odds' is a powerful testament to the human spirit, recounting a remarkable woman's journey through profound adversity. Her story is one of unwavering resilience, courage, and determination in the face of daunting challenges."
    },
    {
        "id": 23,
        "title": "Trailblazer",
        "author": "Henry Lee",
        "description": "The story of a civil rights leader.",
        "category": "Biography",
        "rating": 4.4,
        "summary": "Henry Lee's 'Trailblazer' offers an inspiring biography of a pivotal civil rights leader. Discover the courageous fight for justice, the sacrifices made, and the enduring legacy of a figure who paved the way for equality and profound societal change."
    },
    {
        "id": 24,
        "title": "Born to Lead",
        "author": "Rachel McBride",
        "description": "A biography of a political pioneer.",
        "category": "Biography",
        "rating": 4.3,
        "summary": "Rachel McBride's 'Born to Lead' delves into the life of a political pioneer whose vision and tenacity shaped the course of history. This biography highlights the pivotal moments, challenges, and enduring influence of a true leader who defied conventions and inspired change."
    },
    {
        "id": 25,
        "title": "Dreams of Flight",
        "author": "Alex Monroe",
        "description": "The life of a record-breaking pilot.",
        "category": "Biography",
        "rating": 4.2,
        "summary": "Dreams of Flight by Alex Monroe captures the exhilarating life of a record-breaking pilot who pushed the boundaries of aviation. Experience the thrill of their aerial adventures, the daring feats, and the unwavering pursuit of human potential in the skies."
    },
    {
        "id": 26,
        "title": "Spirits of Kyoto",
        "author": "Yuki Tanaka",
        "description": "A blend of spirits and martial arts.",
        "category": "Anime",
        "rating": 4.7,
        "summary": "Yuki Tanaka's 'Spirits of Kyoto' immerses you in a vibrant world where ancient Japanese spirits intertwine with the discipline of martial arts. Follow a compelling narrative rich with cultural mystique, breathtaking action, and the harmony between the physical and the supernatural."
    },
    {
        "id": 27,
        "title": "Mecha Rising",
        "author": "Kenji Sato",
        "description": "Teen pilots defend Earth with robots.",
        "category": "Anime",
        "rating": 4.6,
        "summary": "In Kenji Sato's 'Mecha Rising,' a new generation of teen pilots emerges to defend Earth from an alien threat using colossal combat robots. Experience thrilling mecha battles, personal growth, and the weight of protecting humanity's future against overwhelming odds."
    },
    {
        "id": 28,
        "title": "Petal Blade",
        "author": "Mina Arai",
        "description": "A girl warrior fights injustice.",
        "category": "Anime",
        "rating": 4.5,
        "summary": "Mina Arai's 'Petal Blade' introduces a fierce young warrior girl who uses her unique skills to combat injustice in a world plagued by corruption. Follow her journey as she blossoms into a formidable force, cutting through darkness with her unwavering spirit and sharp blade."
    },
    {
        "id": 29,
        "title": "Beyond the Clouds",
        "author": "Haruto Mizuki",
        "description": "A touching story of dreams and skies.",
        "category": "Anime",
        "rating": 4.8,
        "summary": "Haruto Mizuki's 'Beyond the Clouds' is a heartwarming and visually stunning story that soars above the ordinary. Follow characters as they chase their dreams, navigate challenges, and discover profound connections, all set against the backdrop of an endless sky."
    },
    {
        "id": 30,
        "title": "Neon Destiny",
        "author": "Sora Natsuki",
        "description": "Fate and future collide in a cyber city.",
        "category": "Anime",
        "rating": 4.4,
        "summary": "Dive into the vibrant, futuristic landscape of 'Neon Destiny' by Sora Natsuki, where the lines between fate and free will blur. In a sprawling cyber city, characters find their lives intertwined by unseen forces, leading to a thrilling clash for the future of their digital world."
    }
]

export default books;