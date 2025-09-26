import React from 'react';

function DashBoard() {
  return (
    <section id="wasteDashboard" className="bg-neutral-100 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="animate__animated animate__fadeIn mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-neutral-800">
            Waste Management Dashboard
          </h2>
          <p className="mx-auto max-w-2xl text-neutral-600">
            Real-time monitoring and analytics for effective urban waste
            management
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="animate__animated animate__fadeInLeft rounded-xl bg-white p-6 shadow-lg lg:col-span-2">
            <div className="mb-4 rounded-lg bg-neutral-900 p-4">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-semibold text-white">
                  Waste Concentration Heatmap
                </h3>
                <select className="rounded bg-neutral-800 px-3 py-1 text-white">
                  <option>Last 24 Hours</option>
                  <option>Last Week</option>
                  <option>Last Month</option>
                </select>
              </div>
              <div className="flex aspect-video items-center justify-center rounded-lg bg-neutral-800">
                <div className="text-center text-gray-400">
                  <svg className="mx-auto mb-2 h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
                  </svg>
                  <p>Interactive Heatmap View</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-neutral-50 p-4">
                <h4 className="mb-2 text-sm text-neutral-600">
                  Total Waste Collected
                </h4>
                <div className="flex items-end gap-2">
                  <span className="text-2xl font-bold text-[#2E7D32]">24.5</span>
                  <span className="text-neutral-600">tons</span>
                </div>
              </div>
              <div className="rounded-lg bg-neutral-50 p-4">
                <h4 className="mb-2 text-sm text-neutral-600">Recycling Rate</h4>
                <div className="flex items-end gap-2">
                  <span className="text-2xl font-bold text-[#2E7D32]">68%</span>
                  <span className="text-sm text-green-500">↑ 12%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="animate__animated animate__fadeInRight space-y-4">
            <div className="rounded-xl bg-white p-6 shadow-lg">
              <h3 className="mb-4 font-semibold">Key Metrics</h3>
              <div className="space-y-4">
                <div>
                  <div className="mb-1 flex justify-between">
                    <span className="text-sm text-neutral-600">Collection Efficiency</span>
                    <span className="text-sm font-semibold">85%</span>
                  </div>
                  <div className="h-2 rounded bg-neutral-100">
                    <div className="h-full rounded bg-[#4CAF50]" style={{ width: '85%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="mb-1 flex justify-between">
                    <span className="text-sm text-neutral-600">Processing Status</span>
                    <span className="text-sm font-semibold">92%</span>
                  </div>
                  <div className="h-2 rounded bg-neutral-100">
                    <div className="h-full rounded bg-[#4CAF50]" style={{ width: '92%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="mb-1 flex justify-between">
                    <span className="text-sm text-neutral-600">Community Reports</span>
                    <span className="text-sm font-semibold">78%</span>
                  </div>
                  <div className="h-2 rounded bg-neutral-100">
                    <div className="h-full rounded bg-[#4CAF50]" style={{ width: '78%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-lg">
              <h3 className="mb-4 font-semibold">Recent Alerts</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-red-500"></div>
                  <p className="text-sm text-neutral-600">
                    High concentration in Sector 7
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                  <p className="text-sm text-neutral-600">
                    Collection delayed in Zone B
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <p className="text-sm text-neutral-600">
                    New recycling point added
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DashBoard;