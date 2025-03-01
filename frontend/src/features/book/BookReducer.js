import fetchBooks         from "./actions/fetchBooks";
import fetchLatestBooks   from "./actions/fetchLatestBooks"
import fetchTopBooks      from "./actions/fetchTopBooks"
import fetchBooksBySearch from "./actions/fetchBooksBySearch.js"
import { createSlice }    from "@reduxjs/toolkit"
import fetchBook          from "./actions/fetchBook.js";


const BookSlice = createSlice({
    name: 'book',
    initialState: {

        books: [],
        book : {},
        latestBooks: [],
        topBooks: [],
        searchedBooks : [],

        loadingBooks: false,
        loadingLatestBooks: false,
        loadingTopBooks: false,
        loadingBook : false,
        loadingSearchedBooks : false,

        errorBooks: null,
        errorLatestBooks: null,
        errorTopBooks: null,
        errorBook : null,
        errorSearchedBooks : null,

        
    },
    reducers: {},
    extraReducers: (builder) => {
     
        builder.addCase(fetchBooks.pending, (state, action) => {
            state.loadingBooks = true;
            state.errorBooks = null;
        });
        builder.addCase(fetchBooks.fulfilled, (state, action) => {
            state.loadingBooks = false;
            state.books = action.payload;
        });
        builder.addCase(fetchBooks.rejected, (state, action) => {
            state.loadingBooks = false;
            state.errorBooks = action.payload;
        });


        builder.addCase(fetchLatestBooks.pending, (state, action) => {
            state.loadingLatestBooks = true;
            state.errorLatestBooks = null;
        });
        builder.addCase(fetchLatestBooks.fulfilled, (state, action) => {
            state.loadingLatestBooks = false;
            state.latestBooks = action.payload;
        });
        builder.addCase(fetchLatestBooks.rejected, (state, action) => {
            state.loadingLatestBooks = false;
            state.errorLatestBooks = action.payload;
        });


        builder.addCase(fetchTopBooks.pending, (state, action) => {
            state.loadingTopBooks = true;
            state.errorTopBooks = null;
        });
        builder.addCase(fetchTopBooks.fulfilled, (state, action) => {
            state.loadingTopBooks = false;
            state.topBooks = action.payload;
        });
        builder.addCase(fetchTopBooks.rejected, (state, action) => {
            state.loadingTopBooks = false;
            state.errorTopBooks = action.payload;
        });

        builder.addCase(fetchBook.pending, (state, action) => {
            state.loadingBook = true;
            state.errorBook = null
        });
        builder.addCase(fetchBook.fulfilled, (state, action) => {
            state.loadingBook = false;
            state.book = action.payload;
        });
        builder.addCase(fetchBook.rejected, (state, action) => {
            state.loadingBook = false;
            state.errorBook = action.payload;
        });

        builder.addCase(fetchBooksBySearch.pending, (state, action) => {
            state.loadingSearchedBooks = true;
            state.errorSearchedBooks = null
        });
        builder.addCase(fetchBooksBySearch.fulfilled, (state, action) => {
            state.loadingSearchedBooks = false;
            state.searchedBooks = action.payload;
        });
        builder.addCase(fetchBooksBySearch.rejected, (state, action) => {
            state.loadingBook = false;
            state.errorSearchedBooks = action.payload;
        });
    }
});

const BookReducer = BookSlice.reducer;
export default BookReducer;