import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import Paginate from 'react-paginate';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Components
import Topbar from 'components/Topbar';
import Filterbar from 'components/Filterbar';
import List from 'components/List';
import Modal from 'components/Modal';

// Store
import * as BookActions from 'store/modules/books/actions';

// CSS
import { Container } from './Home.style';

const Home = ({ searchBooksRequest, loading, data }) => {
  const [filter, setFilter] = useState('');
  const [iData, setIData] = useState(1998);
  const [eData, setEData] = useState(2019);
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState({});

  const validationYear = year => {
    if (isNaN(year) || year < 0) return 1998;
    
    return year;
  }
	
	const handleFilter = ({ target }) => setFilter(target.value);
  const handleIData = ({ target }) => setIData(validationYear(target.value));
  const handleEData = ({ target }) => setEData(validationYear(target.value));
  
  const handleDetalhes = (book = {}) => {
    if (book._id) setModalData(book);
		setModal(!modal);
  }

	const handleSearch = () => {
		searchBooksRequest({
			filter,
			iData,
			eData,
		});
	}

	useEffect(() => {
		searchBooksRequest();
	}, [searchBooksRequest]);		
  return (
  <Container>
    {modal && <Modal 
			show={modal}
			data={modalData}
			closeModal={handleDetalhes}
		/>}
    <Topbar
      filter={filter}
			handleFilter={handleFilter}
			handleSearch={handleSearch}
			loading={loading}
    />
		<Filterbar
			iData={iData}
			eData={eData}
			handleIData={handleIData}
			handleEData={handleEData}
			total={data.total}
		/>
		<List
			handleDetalhes={handleDetalhes}
			books={data.docs}
		/>
		<div>
			<Paginate
				pageCount={data.pages}
				pageRangeDisplayed={3}
				marginPagesDisplayed={2}
				onPageChange={current_page => handleSearch(current_page.selected +1)}
				previousLabel={'<'}
				nextLabel={'>'}
				activeClassName="active"
				initialPage={data.page - 1}
				disabledClassName="disabled"
			/>
		</div>
  </Container>
)};

Home.propTypes = {
	loading: PropTypes.bool.isRequired,
	data: PropTypes.object.isRequired,
	searchBooksRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
	loading: state.books.loading,
	data: state.books.data,
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(BookActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);