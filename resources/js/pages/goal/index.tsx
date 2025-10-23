import * as React from 'react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { route } from 'ziggy-js';
import { type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { Goal } from '@/types/goal';
import { Paginate } from '@/types/paginate';
import { LinearProgress, Checkbox, Modal, Box, Typography } from '@mui/material';
import { DeleteOutlineOutlined, CreateOutlined } from '@mui/icons-material';

type PageProps = {
    goals: Paginate<Goal>;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Goal',
        href: route('goal.index'),
    },
];

export default function Index() {
    const { goals } = usePage<PageProps>().props;
    const goalData = goals.data;

    const [ currentGoal, setCurrentGoal ] = React.useState<Goal>();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const storeCurrentGoal = (id: BigInt) => {
        setCurrentGoal(goalData.find((goal) => goal.id === id));
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Goal" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="grid grid-cols-9 gap-4 text-center text-white">
                    <p style={hrStyle} className="col-span-1">-</p>
                    <p style={hrStyle} className="col-span-2">Titre</p>
                    <p style={hrStyle} className="col-span-3">Description</p>
                    <p style={hrStyle} className="col-span-2">Progression</p>
                    <p style={hrStyle} className="col-span-1">Action</p>
                </div>
                <div>
                    {goalData.map((goal) => (
                        <div
                            key={goal.id}
                            className="grid grid-cols-9 gap-4 text-center border-b-1 cursor-pointer"
                            onClick={() => {
                                handleOpen();
                                storeCurrentGoal(goal.id);
                            }}
                        >
                            <p style={trStyle} className="col-span-1">
                                <Checkbox />
                            </p>
                            <p style={trStyle} className="col-span-2 truncate text-left">{goal.title}</p>
                            <p style={trStyle} className="col-span-3 truncate text-left">{goal.description}</p>
                            <p style={trStyle} className="col-span-2">
                                <LinearProgress variant="determinate" value={goal.progress} />
                            </p>
                            <div className="flex justify-center items-center gap-3 col-span-1">
                                <button 
                                    style={trStyle} 
                                    className="bg-red-500 p-0 m-0 w-10 h-10 text-white rounded justify-center cursor-pointer hover:bg-red-300"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <DeleteOutlineOutlined />
                                </button>
                                <button 
                                    style={trStyle}
                                    className="bg-[#4A90E2] p-0 m-0 w-10 h-10 text-white rounded justify-center cursor-pointer hover:bg-blue-300"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <CreateOutlined />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="parent-modal-title"
                    aria-describedby="parent-modal-description"
                >
                    <Box style={modalStyle} sx={{ width: 400, background: "white" }}>
                        <h2 id="parent-modal-title">{currentGoal?.title}</h2>
                        <p id="parent-modal-description">
                            {currentGoal?.description}
                        </p>
                    </Box>
                </Modal>
            </div>
        </AppLayout>
    );
}

const hrStyle: React.CSSProperties = {
    background: "#4A90E2",
    padding: 3,
    textAlign: "center",
    borderRadius: 3
}

const trStyle: React.CSSProperties = {
    display: "grid",
    padding: 8,
    alignItems: "center"
}

const progressStyle: React.CSSProperties = {
    backgroundColor: "white",
    borderRadius: 3,
    accentColor: '#4A90E2'
}

const modalStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: 10,
    borderRadius: 5
}
