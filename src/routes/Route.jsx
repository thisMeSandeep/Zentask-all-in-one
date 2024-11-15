import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layout/Layout";
import Todo from "../pages/todo/Todo";
import Calculator from "../pages/calculator/Calculator";
import Currency from "../pages/currencyConvertor/Currency";
import Discount from "../pages/discountCalculator/Discount";
import Expense from "../pages/expenseTracker/Expense";
import Clock from "../pages/clock/Clock";
import Notes from "../pages/notes/Notes";
import Weather from "../pages/weather/Weather"
import Welcome from "../pages/welcomePage/Welcome"
import NoteDisplay from "../pages/notes/NoteDisplay";
import Numerical from "../pages/numericalCalculator/Numerical";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Welcome />
      },
      {
        path: 'todo',
        element: <Todo />
      },
      {
        path: 'notes',
        element: <Notes />,
      },
      {
        path: 'notes/:id',
        element: <NoteDisplay />
      },
      {
        path: 'weather',
        element: <Weather />
      },
      {
        path: 'expense',
        element: <Expense />
      },
      {
        path: 'clock',
        element: <Clock/>
      },
      {
        path: 'currency',
        element: <Currency />
      },
      {
        path: 'discount',
        element: <Discount />
      },
      {
        path: 'numerical',
        element: <Numerical/>
      },
      {
        path: 'calculator',
        element: <Calculator />
      },
    ]
  },
]);




export default function MyProvider() {
  return <RouterProvider router={router} />
};