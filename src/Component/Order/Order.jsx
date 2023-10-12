// import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import orderCover from '../../assets/shop/banner2.jpg'
import Cover from '../Shared/Cover';
import useMenu from '../../hooks/useMenu';
import FoodCart from '../Shared/FoodCart';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const Order = () => {
    const [menu] = useMenu();
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drink'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks');
    return (
        <div className='w-4/5 m-auto'>
            <Cover img={orderCover} title='Order Food'></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <div className='grid grid-cols-3 gap-4'>
                        {
                            salad.map(item =>
                                <FoodCart key={item._id} item={item}>
                                </FoodCart>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-3 gap-4'>
                        {
                            pizza.map(item =>
                                <FoodCart key={item._id} item={item}>
                                </FoodCart>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-3 gap-4'>
                        {
                            soup.map(item =>
                                <FoodCart key={item._id} item={item}>
                                </FoodCart>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-3 gap-4'>
                        {
                            desserts.map(item =>
                                <FoodCart key={item._id} item={item}>
                                </FoodCart>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-3 gap-4'>
                        {
                            drinks.map(item =>
                                <FoodCart key={item._id} item={item}>
                                </FoodCart>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;