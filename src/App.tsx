import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom'


import AuthLayout from './layout/AuthLayout'
import DashboardLayout from './layout/DashboardLayout'
import Register from './views/auth/RegisterPage'
import Accounting from './views/dashboard/Accounting';
import Banking from './views/dashboard/Banking';
import Billing from './views/dashboard/Billing';
import Bills from './views/dashboard/Bills';
import Chat from './views/dashboard/Chat';
import Dashboard from './views/dashboard/Dashboard'
import MakePayments from './views/dashboard/MAkePayments';
import MessageBoard from './views/dashboard/MessageBoard';
import Payroll from './views/dashboard/Payroll';
import ProductAndServices from './views/dashboard/ProductAndServices';
import Reports from './views/dashboard/Reports';
import Sales from './views/dashboard/Sales';
import Schedule from './views/dashboard/Schedule';
import Settings from './views/dashboard/Settings'
import Todo from './views/dashboard/Todo';
import UploadDocs from './views/dashboard/UploadDocs';
import Vendors from './views/dashboard/Vendors';
import ViewReport from './views/dashboard/ViewReport';
import Welcome from './views/dashboard/Welcome';

function App() {
  return (
    <BrowserRouter>
      <div className=" "> 
        <div>
          <Routes>
            <Route element={<DashboardLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/accounting" element={<Accounting />} />
              <Route path="/banking" element={<Banking />} />
              <Route path="/billing" element={<Billing />} />
              <Route path="/bills" element={<Bills />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/make-payments" element={<MakePayments />} />
              <Route path="/message-board" element={<MessageBoard />} />
              <Route path="/payroll" element={<Payroll />} />
              <Route path="/products&services" element={<ProductAndServices />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/sales" element={<Sales />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/to-do" element={<Todo />} />
              <Route path="/upload-docs" element={<UploadDocs />} />
              <Route path="/vendors" element={<Vendors />} />
              <Route path="/view-report" element={<ViewReport />} />
              <Route path="/welcome" element={<Welcome />} />
              <Route />
            </Route>
            <Route element={<AuthLayout />}>
              <Route path="/register" element={<Register />} />
            </Route> </Routes>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
