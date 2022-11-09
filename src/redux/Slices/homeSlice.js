import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk('home/fetchPosts', async () => {
  const response = await fetch('https://fake-tweets-api.herokuapp.com/posts');
  return await response.json();
});

export const fetchPost = createAsyncThunk('home/fetchPost', async id => {
  const response = await fetch(
    `https://fake-tweets-api.herokuapp.com/posts/${id}`,
  );
  return await response.json();
});

const initialState = {
  posts: [],
  post: {
    id: 1,
    author: '',
    image: null,
    message: '',
    likes: [],
    comments: null,
  },
  suggestions: [
    {
      id: 0,
      name: 'Activision',
      nickname: '@Activision',
      yourFollowers: 'Boz Ayı ve 22 kişi daha takip ediyor',
      profilePicture:
        'https://pbs.twimg.com/profile_images/1412448565813604354/TQLICrjT_400x400.jpg',
      isFollowed: false,
    },
    {
      id: 1,
      name: 'Arda Güler',
      nickname: '@ardaguler',
      profilePicture:
        'https://pbs.twimg.com/profile_images/1512521201490571273/Tfhs8qQV_400x400.jpg',
      yourFollowers: 'Mert Hakan Yandaş ve 22 kişi daha takip ediyor',
      isFollowed: false,
    },
    {
      id: 2,
      name: 'Fenerbahçe',
      nickname: '@fenerbahce',
      profilePicture:
        'https://pbs.twimg.com/profile_images/1582333458814275584/7cAtHzQe_400x400.jpg',
      yourFollowers: 'Boz Ayı ve 22 kişi daha takip ediyor',
      isFollowed: false,
    },

    {
      id: 3,
      name: 'Jorge Jesus',
      nickname: '@jorgejesus',
      profilePicture:
        'https://pbs.twimg.com/profile_images/1138175077449719808/BdntS7rp_400x400.jpg',
      yourFollowers: 'Boz Ayı ve 22 kişi daha takip ediyor',
      isFollowed: false,
    },
    {
      id: 4,
      name: 'Uefa Europa League',
      nickname: '@EuropaLeague',
      profilePicture:
        'https://pbs.twimg.com/profile_images/1417053169788542977/6uLZ5iz7_400x400.jpg',
      yourFollowers: '',
      isFollowed: false,
    },
    {
      id: 5,
      name: 'De Marke Sports',
      nickname: '@demarkesports',
      profilePicture:
        'https://pbs.twimg.com/profile_images/1578095281274593280/hEzJ8cxF_400x400.jpg',
      yourFollowers: '',
      isFollowed: false,
    },
    {
      id: 6,
      name: 'Recep Tayyip Erdoğan',
      nickname: '@RTErdogan',
      profilePicture:
        'https://pbs.twimg.com/profile_images/1151410974240444416/yVvaD7hU_400x400.jpg',
      yourFollowers: '',
      isFollowed: false,
    },
    {
      id: 7,
      name: 'Muharrem İnce',
      nickname: '@vekilince',
      profilePicture:
        'https://pbs.twimg.com/profile_images/1077945504527511553/Duyuwdjr_400x400.jpg',
      yourFollowers: '',
      isFollowed: false,
    },
    {
      id: 8,
      name: 'Activision',
      nickname: '@Activision',
      yourFollowers: '',
      profilePicture:
        'https://pbs.twimg.com/profile_images/1412448565813604354/TQLICrjT_400x400.jpg',
      isFollowed: false,
    },
    {
      id: 9,
      name: 'Arda Güler',
      nickname: '@ardaguler',
      profilePicture:
        'https://pbs.twimg.com/profile_images/1512521201490571273/Tfhs8qQV_400x400.jpg',
      yourFollowers: '',
      isFollowed: false,
    },
    {
      id: 10,
      name: 'Fenerbahçe',
      nickname: '@fenerbahce',
      profilePicture:
        'https://pbs.twimg.com/profile_images/1582333458814275584/7cAtHzQe_400x400.jpg',
      yourFollowers: '',
      isFollowed: false,
    },
    {
      id: 11,
      name: 'Jorge Jesus',
      nickname: '@jorgejesus',
      profilePicture:
        'https://pbs.twimg.com/profile_images/1138175077449719808/BdntS7rp_400x400.jpg',
      yourFollowers: '',
      isFollowed: false,
    },
    {
      id: 12,
      name: 'Uefa Europa League',
      nickname: '@EuropaLeague',
      profilePicture:
        'https://pbs.twimg.com/profile_images/1417053169788542977/6uLZ5iz7_400x400.jpg',
      yourFollowers: '',
      isFollowed: false,
    },
    {
      id: 13,
      name: 'De Marke Sports',
      nickname: '@demarkesports',
      profilePicture:
        'https://pbs.twimg.com/profile_images/1578095281274593280/hEzJ8cxF_400x400.jpg',
      yourFollowers: '',
      isFollowed: false,
    },
  ],
  messages: [
    {
      id: 0,
      name: 'Activision',
      nickname: '@Activision',
      profilePicture:
        'https://pbs.twimg.com/profile_images/1412448565813604354/TQLICrjT_400x400.jpg',
      message:
        'The #COD2021 reveal is coming soon. Get ready for the biggest reveal in Call of Duty history. https://t.co/6Z7Z7Z7Z7Z',
    },
    {
      id: 1,
      name: 'Arda Güler',
      nickname: '@ardaguler',
      profilePicture:
        'https://pbs.twimg.com/profile_images/1512521201490571273/Tfhs8qQV_400x400.jpg',
      message:
        "I'm so excited for the #COD2021 reveal. I can't wait to see what's in store for the future of Call of Duty.",
    },
    {
      id: 2,
      name: 'Fenerbahçe',
      nickname: '@fenerbahce',
      profilePicture:
        'https://pbs.twimg.com/profile_images/1582333458814275584/7cAtHzQe_400x400.jpg',
      message:
        'The #COD2021 reveal is coming soon. Get ready for the biggest reveal in Call of Duty history. https://t.co/6Z7Z7Z7Z7Z',
    },
    {
      id: 3,
      name: 'Jorge Jesus',
      nickname: '@jorgejesus',
      profilePicture:
        'https://pbs.twimg.com/profile_images/1138175077449719808/BdntS7rp_400x400.jpg',
      message:
        'The #COD2021 reveal is coming soon. Get ready for the biggest reveal in Call of Duty history. https://t.co/6Z7Z7Z7Z7Z',
    },
    {
      id: 4,
      name: 'Uefa Europa League',
      nickname: '@EuropaLeague',
      profilePicture:
        'https://pbs.twimg.com/profile_images/1417053169788542977/6uLZ5iz7_400x400.jpg',
      message:
        'The #COD2021 reveal is coming soon. Get ready for the biggest reveal in Call of Duty history. https://t.co/6Z7Z7Z7Z7Z',
    },
    {
      id: 5,
      name: 'De Marke Sports',
      nickname: '@demarkesports',
      profilePicture:
        'https://pbs.twimg.com/profile_images/1578095281274593280/hEzJ8cxF_400x400.jpg',
      message:
        'The #COD2021 reveal is coming soon. Get ready for the biggest reveal in Call of Duty history. https://t.co/6Z7Z7Z7Z7Z',
    },
    {
      id: 6,
      name: 'Recep Tayyip Erdoğan',
      nickname: '@RTErdogan',
      profilePicture:
        'https://pbs.twimg.com/profile_images/1151410974240444416/yVvaD7hU_400x400.jpg',
      message:
        'The #COD2021 reveal is coming soon. Get ready for the biggest reveal in Call of Duty history. https://t.co/6Z7Z7Z7Z7Z',
    },
    {
      id: 7,
      name: 'Muharrem İnce',
      nickname: '@vekilince',
      profilePicture:
        'https://pbs.twimg.com/profile_images/1077945504527511553/Duyuwdjr_400x400.jpg',
      message:
        'The #COD2021 reveal is coming soon. Get ready for the biggest reveal in Call of Duty history. https://t.co/6Z7Z7Z7Z7Z',
    },
    {
      id: 8,
      name: 'Activision',
      nickname: '@Activision',
      profilePicture:
        'https://pbs.twimg.com/profile_images/1412448565813604354/TQLICrjT_400x400.jpg',
      message:
        'The #COD2021 reveal is coming soon. Get ready for the biggest reveal in Call of Duty history. https://t.co/6Z7Z7Z7Z7Z',
    },
    {
      id: 9,
      name: 'Arda Güler',
      nickname: '@ardaguler',
      profilePicture:
        'https://pbs.twimg.com/profile_images/1512521201490571273/Tfhs8qQV_400x400.jpg',
      message:
        'The #COD2021 reveal is coming soon. Get ready for the biggest reveal in Call of Duty history. https://t.co/6Z7Z7Z7Z7Z',
    },
    {
      id: 10,
      name: 'Fenerbahçe',
      nickname: '@fenerbahce',
      profilePicture:
        'https://pbs.twimg.com/profile_images/1582333458814275584/7cAtHzQe_400x400.jpg',
      message:
        'The #COD2021 reveal is coming soon. Get ready for the biggest reveal in Call of Duty history. https://t.co/6Z7Z7Z7Z7Z',
    },
    {
      id: 11,
      name: 'Jorge Jesus',
      nickname: '@jorgejesus',
      profilePicture:
        'https://pbs.twimg.com/profile_images/1138175077449719808/BdntS7rp_400x400.jpg',
      message:
        'The #COD2021 reveal is coming soon. Get ready for the biggest reveal in Call of Duty history. https://t.co/6Z7Z7Z7Z7Z',
    },
    {
      id: 12,
      name: 'Uefa Europa League',
      nickname: '@EuropaLeague',
      profilePicture:
        'https://pbs.twimg.com/profile_images/1417053169788542977/6uLZ5iz7_400x400.jpg',
      message:
        'The #COD2021 reveal is coming soon. Get ready for the biggest reveal in Call of Duty history. https://t.co/6Z7Z7Z7Z7Z',
    },
    {
      id: 13,
      name: 'De Marke Sports',
      nickname: '@demarkesports',
      profilePicture:
        'https://pbs.twimg.com/profile_images/1578095281274593280/hEzJ8cxF_400x400.jpg',
      message:
        'The #COD2021 reveal is coming soon. Get ready for the biggest reveal in Call of Duty history. https://t.co/6Z7Z7Z7Z7Z',
    },
  ],
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
    builder.addCase(fetchPost.fulfilled, (state, action) => {
      state.post = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = homeSlice.actions;

export const selectHome = state => state.home;

export default homeSlice.reducer;
