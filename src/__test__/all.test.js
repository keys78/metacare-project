import { render, } from '@testing-library/react';
import SearchBar from '../components/SearchBar';
import Dashboard from '../pages/Dashboard';
import FilterBar from '../components/FilterBar';
import ContentDisplay from '../contexts/ContentDisplay';
import FilterActivites from '../contexts/FilterActivites';
import TabsNav from '../contexts/TabsNav';
import TopBar from '../contexts/TopBar';


const TestRestHomePage = () => {
    return (
       <Dashboard />
    )
};
const TestContentDisplay = () => {
    return (
       <ContentDisplay />
    )
};
const TestFilterActivities = () => {
    return (
      <FilterActivites />
    )
};
const TestTabsNav = () => {
    return (
      <TabsNav />
    )
};
const TestTopBar = () => {
    return (
     <TopBar />
    )
};
const TestSearchBar = () => {
    return (
      <SearchBar />
    )
};
const TestFilterBar = () => {
    return (
        <FilterBar />
    )
};



describe("All page and components", () => {
    it('dashboard renders without errorss', async () => {
        render(<TestRestHomePage />)
    })
        it('Search component is without errors', async () => {
            render(<TestSearchBar />)
        })
        it('filterbar component is without errors', async () => {
            render(<TestFilterBar />)
        })
        it('content display component is without errors', async () => {
            render(<TestContentDisplay />)
        })
        it('filter activities component is without errors', async () => {
            render(<TestFilterActivities />)
        })
        it('Tabsnav component is without errors', async () => {
            render(<TestTabsNav />)
        })
        it('Topbar component is without errors', async () => {
            render(<TestTopBar/>)
        })
       
});