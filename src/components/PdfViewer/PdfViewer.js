import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ResumePDF from '../../assets/t-schram-resume.pdf';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import './PdfViewer.css';

const PdfViewer = () => {
	const [defaultResume] = useState(ResumePDF);
	const defaultLayoutPluginInstance = defaultLayoutPlugin();
	return (
		<div>
				<div className='pdf-container'>
					{defaultResume && (
						<>
							<Worker workerUrl='https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js'>
								<Viewer
									fileUrl={ResumePDF}
									plugins={[defaultLayoutPluginInstance]}
								/>
							</Worker>
						</>
					)}
				</div>
		</div>
	);
};

export default PdfViewer;
