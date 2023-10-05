import React from 'react'
import {Document, Page, pdfjs} from 'react-pdf'
import UseCrud from '../hooks/UseCrud'

const Books = () => {

    const {fetchData, dataCRUD, error, isLoading } = UseCrud('books/all_books/2/');
    const [bookData, setBookData] = React.useState(null);
    const [numPages, setNumPages] = React.useState(null);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    React.useEffect(()=>{
        fetchData();
    },[])

    React.useEffect(()=>{
        if (dataCRUD){
            setBookData(dataCRUD)
        }else{
            console.log("There is no data")
        }
    },[dataCRUD])

  return (
    <div>
            {bookData ? (
                <>
                <h1>{bookData.name}</h1>
                <Document file={bookData.book} onLoadSuccess={onDocumentLoadSuccess}
                options={{ workerSrc: "/pdf.worker.js" }}>
                    {Array.from(new Array(numPages), (el, index) => (
                    <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                    ))}
                </Document>
                </>

      ) : (
        <p>Loading...</p>
      )}
    </div>

  )
}
export default Books
